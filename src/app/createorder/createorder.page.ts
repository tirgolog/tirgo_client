import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, Platform} from "@ionic/angular";
import {ChoicecityPage} from "../choicecity/choicecity.page";
import {AuthenticationService} from "../services/authentication.service";
import {SelecttypecargoPage} from "../selecttypecargo/selecttypecargo.page";
import {Router} from "@angular/router";
import * as moment from "moment";
import { log } from 'console';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.page.html',
  styleUrls: ['./createorder.page.scss'],
})
export class CreateorderPage implements OnInit {
  data = {
    city_start_id: 0,
    city_start: '',
    start_lat:'',
    start_lng:'',
    city_finish_id: 0,
    city_finish: '',
    finish_lat:'',
    finish_lng:'',
    add_two_days: true,
    mode: false,
    cubic: '0',
    loading: '0',
    date_start: moment().toISOString() || "" ,
    typecargo: 0,
    typetransport: 0,
    typestransport: [],
    weight:'',
    length_box:'',
    width_box:'',
    height_box:'',
    price:'',
    currency:'$',
    adr:false,
    secure_transaction:false,
    no_cash:false,
  }
  insuraance: boolean = false;
  loadingCreateOrder: boolean = false;
  priceSafe:number = 0;
  cubic:any[]=[];
  mode:boolean = false;
  loading:any[]=[];
  curDate = moment().toISOString() || "";
  constructor(
      private alertController: AlertController,
      public authService: AuthenticationService,
      private modalController: ModalController,
      public platform: Platform,
      private router: Router,
      ) {
  }
  calcSafePrice(){
    if (this.insuraance){
      this.priceSafe = Math.round((+this.data.price/0.88) + 100);
    }else {
      this.priceSafe = Math.round(+this.data.price + 100);
    }
  }
  async clearOrder(){
    const alert = await this.alertController.create({
      header: 'Очистить поля',
      message:'Вы уверены что хотите очистить заполненные данные?',
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Нет',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Очистить',
          role: 'destructive',
          handler: async () => {
            this.data = {
              city_start_id: 0,
              city_start: '',
              start_lat:'',
              start_lng:'',
              city_finish_id: 0,
              city_finish: '',
              finish_lat:'',
              finish_lng:'',
              add_two_days: false,
              mode: false,
              cubic: '0',
              loading: '0',
              date_start: new Date().toISOString() || "" ,
              typecargo: 0,
              typetransport: 0,
              typestransport:[],
              weight:'',
              length_box:'',
              width_box:'',
              height_box:'',
              currency:'$',
              price:'',
              adr:false,
              secure_transaction:false,
              no_cash: false,
            }
          }
        }
      ],
    });
    await alert.present();
  }
  async createOrder(){
    this.loadingCreateOrder = true;
    if (this.data.secure_transaction){
      // @ts-ignore
      if (this.data.price <= +this.authService.currentUser?.balance){
        if (+this.data.weight > 35000){
          await this.authService.alert('Не можем создать заказ','Вес груза не может быть больше 35 000 кг.')
          this.loadingCreateOrder = false;
        }else if (this.data.city_start === ''){
          await this.authService.alert('Не можем создать заказ','Нужно выбрать место отправки груза')
          this.loadingCreateOrder = false;
        }else if (this.data.city_finish === ''){
          await this.authService.alert('Не можем создать заказ','Нужно выбрать место доставки груза')
          this.loadingCreateOrder = false;
        }else if (this.data.typecargo === 0){
          await this.authService.alert('Не можем создать заказ','Нужно выбрать тип груза')
          this.loadingCreateOrder = false;
        }else if (this.data.weight === ''){
          await this.authService.alert('Не можем создать заказ','Нужно ввести вес груза')
          this.loadingCreateOrder = false;
        }
        // else if (this.data.price === ''){
        //   await this.authService.alert('Не можем создать заказ','Нужно ввести предлагаемую цену')
        //   this.loadingCreateOrder = false;
        // }
        else if (!this.data.typestransport.length){
          await this.authService.alert('Не можем создать заказ','Нужно выбрать тип транспорта')
          this.loadingCreateOrder = false;
        }else {
          // @ts-ignore
          this.authService.currentUser?.balance = this.authService.currentUser?.balance - this.data.price
          await this.authService.createOrder(this.data).toPromise()
              .then(async (res) => {
                if (res.status){
                  this.data = {
                    city_start_id: 0,
                    city_start: '',
                    start_lat:'',
                    start_lng:'',
                    city_finish_id: 0,
                    city_finish: '',
                    finish_lat:'',
                    finish_lng:'',
                    add_two_days: false,
                    mode:false,
                    cubic: '0',
                    loading: '0',
                    date_start: new Date().toISOString() || "" ,
                    typecargo: 0,
                    typetransport: 0,
                    typestransport:[],
                    weight:'',
                    length_box:'',
                    width_box:'',
                    height_box:'',
                    currency:'$',
                    price:'',
                    adr:false,
                    secure_transaction:false,
                    no_cash: false,
                  }
                  await this.router.navigate(['/tabs/home'], {replaceUrl: true});
                  this.loadingCreateOrder = false;
                }
              })
              .catch(async (err) => {
                console.log(err)
                this.loadingCreateOrder = false;
              });
        }
      }else {
        await this.authService.alert('Ошибка','На вашем счете недостаточно средств для создания заказа. На счету необходимо иметь сумму предлагаемой цены.')
        this.loadingCreateOrder = false;
      }
    }else {
      if (+this.data.weight > 35000){
        this.loadingCreateOrder = false;
        await this.authService.alert('Не можем создать заказ','Вес груза не может быть больше 35 000 кг.')
      }else if (this.data.city_start === ''){
        this.loadingCreateOrder = false;
        await this.authService.alert('Не можем создать заказ','Нужно выбрать место отправки груза')
      }else if (this.data.city_finish === ''){
        this.loadingCreateOrder = false;
        await this.authService.alert('Не можем создать заказ','Нужно выбрать место доставки груза')
      }else if (this.data.typecargo === 0){
        this.loadingCreateOrder = false;
        await this.authService.alert('Не можем создать заказ','Нужно выбрать тип груза')
      }else if (this.data.weight === ''){
        this.loadingCreateOrder = false;
        await this.authService.alert('Не можем создать заказ','Нужно ввести вес груза')
      }
      // else if (this.data.price === ''){
      //   this.loadingCreateOrder = false;
      //   await this.authService.alert('Не можем создать заказ','Нужно ввести предлагаемую цену')
      // }
      else if (!this.data.typestransport.length){
        this.loadingCreateOrder = false;
        await this.authService.alert('Не можем создать заказ','Нужно выбрать тип транспорта')
      }else {
        await this.authService.createOrder(this.data).toPromise()
            .then(async (res) => {
              if (res.status){
                this.data = {
                  city_start_id: 0,
                  city_start: '',
                  start_lat:'',
                  start_lng:'',
                  city_finish_id: 0,
                  city_finish: '',
                  finish_lat:'',
                  finish_lng:'',
                  add_two_days: false,
                  mode:false,
                  cubic: '0',
                  loading: '0',
                  date_start: new Date().toISOString() || "" ,
                  typecargo: 0,
                  typetransport: 0,
                  typestransport:[],
                  weight:'',
                  length_box:'',
                  width_box:'',
                  height_box:'',
                  currency:'$',
                  price:'',
                  adr:false,
                  secure_transaction:false,
                  no_cash: false,
                }
                await this.router.navigate(['/tabs/home'], {replaceUrl: true});
                this.loadingCreateOrder = false;
              }
            })
            .catch(async (err) => {
              console.log(err)
              this.loadingCreateOrder = false;
            });
      }
    }
  }
  ngOnInit() {
  }
  setAdr(ev:any){
    this.data.adr = ev.target.checked;
  }
  setNoCash(ev:any){
    this.data.no_cash = ev.target.checked;
  }
  setInsuraance(ev:any){
    this.insuraance = ev.target.checked;
    this.calcSafePrice()
  }
  setSecureTrans(ev:any){
    this.data.secure_transaction = ev.target.checked;
  }
  returnNameCargoType(id:number){
    const index = this.authService.typecargo.findIndex(e => +e.id === +id)
    if (index>=0){
      return this.authService.typecargo[index].name
    }else {
      return 'Не выбрано'
    }
  }
  selectDateStart(date:any){
    this.data.date_start = new Date(date).toISOString()
  }
  selectTimeStart(date:any){
    let hours = new Date(date).getHours()
    let minutes = new Date(date).getMinutes()
    let datewithtime = new Date(this.data.date_start).setHours(hours,minutes,0,0)
    this.data.date_start = new Date(datewithtime).toISOString()
  }

  async selectTypeCargo(){
    const modal = await this.modalController.create({
      component: SelecttypecargoPage,
      swipeToClose: false,
      presentingElement: await this.modalController.getTop(),
      cssClass: 'modalCss',
      mode: 'ios',
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data) {
      console.log(data.item.id)
      this.data.typecargo = data.item.id
    }
  }

  async selectStartLocation(){
    const modal = await this.modalController.create({
      component: ChoicecityPage,
      swipeToClose: true,
      showBackdrop: true,
      breakpoints: [0, 0.9],
      initialBreakpoint: 0.9,
      presentingElement: await this.modalController.getTop(),
      backdropDismiss: true,
      cssClass: 'modalCss',
      mode: 'ios',
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data && data.city) {
      console.log('data',data)
      if (this.data.city_finish === data.city.name){
        await this.authService.alert('Ошибка','Невозможно выбрать доставку в одном городе')
      }else {
        this.data.city_start = data.city.name;
        this.data.city_start_id = data.city.place_id;
        this.data.start_lat = data.city.lat;
        this.data.start_lng = data.city.lon;
      }
    }
  }
  async selectFinishLocation(){
    const modal = await this.modalController.create({
      component: ChoicecityPage,
      swipeToClose: true,
      showBackdrop: true,
      breakpoints: [0, 0.9],
      initialBreakpoint: 0.9,
      presentingElement: await this.modalController.getTop(),
      backdropDismiss: true,
      cssClass: 'modalCss',
      mode: 'ios',
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data && data.city) {
      console.log('data',data)
      if (this.data.city_start === data.city.name){
        await this.authService.alert('Ошибка','Невозможно выбрать доставку в одном городе')
      }else {
        this.data.city_finish = data.city.name;
        this.data.city_finish_id = data.city.place_id;
        this.data.start_lat = data.city.lat;
        this.data.start_lng = data.city.lon;
      }
    }
  }
  findTypes(id){
    return this.data.typestransport.findIndex( e => e === id) >= 0;
  }
  setTransportType(item:any){
    this.cubic = JSON.parse(item.cubic);
    this.mode = item.mode;
    this.loading = JSON.parse(item.loading);
  }
  setTransportTypes(item:any){
    if (this.findTypes(item.id)){
      const index = this.data.typestransport.findIndex( e => e === item.id);
      this.data.typestransport.splice(index,1);
    }else {
      this.data.typestransport.push(item.id);
    }
    if (this.data.typestransport.length === 1){
      this.setTransportType(item)
    }
  }
  async selectCurrency(){
    const alert = await this.alertController.create({
      header: 'Валюта',
      cssClass: 'customAlert',
      inputs: [
        {
          name: 'currency',
          type: 'radio',
          label: '$',
          value: '$',
          checked: true,
          handler: () => {
          },
        },
        {
          name: 'currency',
          type: 'radio',
          label: '₽',
          value: '₽',
          handler: () => {
          },
        },
        {
          name: 'currency',
          type: 'radio',
          label: '€',
          value: '€',
          handler: () => {

          },
        },
        {
          name: 'currency',
          type: 'radio',
          label: '₺',
          value: '₺',
          handler: () => {

          },
        },
        {
          name: 'currency',
          type: 'radio',
          label: 'UZS',
          value: 'UZS',
          handler: () => {

          },
        },
        {
          name: 'currency',
          type: 'radio',
          label: '₸',
          value: '₸',
          handler: () => {

          },
        },
      ],
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Выбрать',
          handler: (data) => {
            this.data.currency = data
          },
        },
      ],
    });

    await alert.present();
  }
}
