import {Component, ElementRef, OnInit} from '@angular/core';
import {ModalController, Platform} from "@ionic/angular";
import {AuthenticationService} from "../services/authentication.service";
import axios from "axios";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

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
      public platform: Platform,
      private http: HttpClient,
  ) { }

  async ngOnInit() {

  }
  async findCity(ev:any) {
    this.loadingFind = true;
    setTimeout(async ()=> {
      if (this.loadingFind){
        // const get = "https://nominatim.openstreetmap.org/search?q="+ev.target.value+"&format=json";
        // axios.get(get)
        //     .then( res => {
        //       console.log(res)
        //       if (res.data){
        //         this.findList = res.data;
        //       }
        //     })
        //     .catch(function(error) {
        //       console.log(error)
        //     });
      
        try {
            
          const suggestions = await this.getCity(ev.target.value).toPromise()
          if(suggestions) {
            this.findList = suggestions.map((el: any) => {
              return {
                name: (el.data.city ? el.data.city : el.data.region) + ', '+ el.data.country
              }
            })
          } else {
            this.findList = [];
          }
        } catch(err) {
          console.log(err)
        }
          this.loadingFind = false;
        }
        if (ev.target.value === ''){
          this.findList = [];
          this.loadingFind = false;
        }
        return []
    },2000)
  }

  getCity(query: string) {
    const API_URL = 'https://admin.tirgo.io/api';
    const sUrl = API_URL + '/users/findCity';
    const body = JSON.stringify({
       query
    });
    return this.http.post<any>(sUrl, body)
      .pipe(map(res => {
         if (res.status) {
            return res.data.suggestions;
         } else {
            return [];
         }
      }));
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
