import {Component, ElementRef, OnInit} from '@angular/core';
import {ModalController, Platform} from "@ionic/angular";
import {AuthenticationService} from "../services/authentication.service";
import axios from "axios";

@Component({
  selector: 'app-choicecity',
  templateUrl: './choicecity.page.html',
  styleUrls: ['./choicecity.page.scss'],
})
export class ChoicecityPage implements OnInit {
  findList: any[] | undefined = [];
  viewText = false;
  scrollTopPosition = 0;
  disableScroll = false;
  cities:any[]=[];
  items:any[]=[];
  loadingFind:boolean = false;
  constructor(
      public modalCtrl: ModalController,
      public authService: AuthenticationService,
      public element: ElementRef,
      public platform: Platform
  ) { }

  async ngOnInit() {

  }
  async findCity(ev:any) {
    console.log(ev.target.value)
    this.loadingFind = true;
    setTimeout(async ()=> {
      if (this.loadingFind){
        const get = "https://nominatim.openstreetmap.org/search?q="+ev.target.value+"&format=json";
        axios.get(get)
            .then( res => {
              console.log(res)
              if (res.data){
                this.findList = res.data;
              }
            })
            .catch(function(error) {
              console.log(error)
            });
        this.loadingFind = false;
      }
      if (ev.target.value === ''){
        this.findList = [];
        this.loadingFind = false;
      }
    },2000)
  }
  async setCity(city:any) {
    if (!city.name){
      await this.authService.alert('Ошибка','Требуется выбрать город')
    }else {
      await this.modalCtrl.dismiss({
        city
      });
    }
  }
  scrollEvent(ev:any) {
    this.scrollTopPosition = ev.detail.scrollTop;
  }
}
