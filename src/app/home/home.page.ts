import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {formatDate} from "@angular/common";
import {addDays} from "date-fns";
import {CallNumber} from "@ionic-native/call-number/ngx";
import {ActionSheetController, AlertController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  selectedType:string = 'view'
  item = {
    lat:'59.00000',
    lng:'57.00000'
  }
  vieworder:number = 0;
  constructor(
      public authService: AuthenticationService,
      private callNumber: CallNumber,
      private actionSheetCtrl: ActionSheetController,
      private alertController: AlertController,
      ) {

  }

  ngOnInit() {
  }
  async doRefresh(event:any) {
    setTimeout(async() => {
      this.authService.myorders = await this.authService.getMyOrders().toPromise();
      event.target.complete();
    }, 1000);
  }
  selectType(type:string){
    this.selectedType = type;
  }
  returnNameTypeTransport(type:number){
    const index = this.authService.typetruck.findIndex(e => +e.id === +type)
    if (index>=0){
      return this.authService.typetruck[index].name
    }else {
      return 'Не выбрано'
    }
  }

  returnNameCargoType(id:number){
    const index = this.authService.typecargo.findIndex(e => +e.id === +id)
    if (index>=0){
      return this.authService.typecargo[index].name
    }else {
      return 'Не выбрано'
    }
  }
  addDay(date:any,num:number){
    return formatDate(new Date(addDays(date,num).toISOString()), 'dd MMMM', 'ru');
  }
  async cancelDriver(userid:number,orderid:number){
    const alert = await this.alertController.create({
      header: 'Вы уверены?',
      message: 'Вы уверены что хотите отклонить данного водителя?',
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Нет',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Принять',
          handler: async () => {
            await this.authService.cancelDriver(orderid,userid).toPromise()
                .then(async (res) => {
                  if (res.status){
                    this.authService.myorders = await this.authService.getMyOrders().toPromise();
                  }
                })
                .catch(async (err) => {

                });
          }
        }
      ],
    });
    await alert.present();
  }
  async acceptDriver(userid:number,orderid:number,secure:number,price){
    if (secure){
      console.log('secure')
      console.log(this.authService.currentUser.balance)
      if (this.authService.currentUser.balance >= price){
        const alert = await this.alertController.create({
          header: 'Вы уверены?',
          subHeader: 'Вы уверены что хотите принять данного водителя?',
          message: 'Его невозможно будет изменить. В случае отказа нужно будет создать заказ снова',
          cssClass: 'customAlert',
          buttons: [
            {
              text: 'Нет',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {

              }
            }, {
              text: 'Принять',
              handler: async () => {
                this.selectedType = 'process';
                await this.authService.acceptDriver(orderid,userid,this.calcSafePrice(price)).toPromise()
                    .then(async (res) => {
                      if (res.status){
                        this.authService.myorders = await this.authService.getMyOrders().toPromise();
                      }
                    })
                    .catch(async (err) => {

                    });
              }
            }
          ],
        });
        await alert.present();
      }else {
        const alert = await this.alertController.create({
          header: 'Недостаточно средств',
          subHeader: 'На вашем балансе ' + this.authService.currentUser.balance,
          message: 'Для того чтобы принять водителя нужно иметь на счету не менее ' + this.calcSafePrice(price),
          cssClass: 'customAlert',
          buttons: [
            {
              text: 'Хорошо',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {

              }
            }
          ],
        });
        await alert.present();
      }
    }else {
      const alert = await this.alertController.create({
        header: 'Вы уверены?',
        subHeader: 'Вы уверены что хотите принять данного водителя?',
        message: 'Его невозможно будет изменить. В случае отказа нужно будет создать заказ снова',
        cssClass: 'customAlert',
        buttons: [
          {
            text: 'Нет',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {

            }
          }, {
            text: 'Принять',
            handler: async () => {
              this.selectedType = 'process';
              await this.authService.acceptDriver(orderid,userid,0).toPromise()
                  .then(async (res) => {
                    if (res.status){
                      this.authService.myorders = await this.authService.getMyOrders().toPromise();
                    }
                  })
                  .catch(async (err) => {

                  });
            }
          }
        ],
      });
      await alert.present();
    }
  }
  calcSafePrice(price:string){
    return Math.round((+price/0.88) + 100);
  }
  async callMan(user:any){
    let buttons = []
    for (let row of user.contacts){
      buttons.push({
        text: '+'+row.text,
        handler: () => {
          console.log('+'+row.text)
          this.callNumber.callNumber('+'+row.text, true)
        }
      })
    }
    buttons.push({
      text: 'Отмена',
      role: 'cancel',
      cssClass: 'cancel-action-sheet',
      handler: () => {
      }
    })
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Выберите контакт',
      subHeader: user.name,
      cssClass: 'custom-action-sheet',
      buttons: buttons,
    });
    actionSheet.present();
  }
  viewOrderInfo(id:number){
    if (this.vieworder === id){
      this.vieworder = 0;
    }else {
      this.vieworder = id;
    }
  }
}
