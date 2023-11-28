import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../user';
import {Storage} from '@ionic/storage';
import {AlertController} from "@ionic/angular";

const TOKEN_KEY = 'jwttirgoclienttoken';
const API_URL = 'http://localhost:7790';
import {InAppBrowser} from "@ionic-native/in-app-browser/ngx";
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject({});
  public serverApi: string = 'http://localhost:7790';
  public currentUser: User | undefined;
  public viewintro: boolean = false
  static jwt: any;
  public language: string = "ru";
  public addresses: any[] = [];
  public mytruck: any[]=[];
  public contacts: any[]=[];
  public typetruck: any[] = [];
  public typecargo: any[] = [];
  public messages: any[] = [];
  public myorders: any[] = [];
  public tn_codes: any[] = [];
  public notifications: any[] = [];

  constructor(
    private http: HttpClient,
    public alertController: AlertController,
    private iab: InAppBrowser,
    private storage: Storage
  ) {

  }
  goToSupport(){
    this.iab.create('https://t.me/tirgo_support','_system');
  }
  addLeadingZeros(num:number) {
    return String(num).padStart(6, '0');
  }
  loginUser(phone: string) {
    const sUrl = API_URL + '/users/loginClient';
    const body = JSON.stringify({
      phone,
    });
    return this.http.post<any>(sUrl, body);
  }
  verifyCode(phone: string,code:string) {
    const sUrl = API_URL + '/users/codeverifyClient';
    const body = JSON.stringify({
      phone,code
    });
    return this.http.post<any>(sUrl, body);
  }
  createOrder(data:any) {
    //const sUrl = API_URL + '/users/createOrderClient';
    const sUrl = API_URL + '/users/createOrderClientTypes';
    const body = JSON.stringify({
      data
    });
    return this.http.post<any>(sUrl, body);
  }
  regUser(name: string) {
    const sUrl = API_URL + '/users/regUserClient';
    const body = JSON.stringify({
      name
    });
    return this.http.post<any>(sUrl, body);
  }

  checkSession() {
    const sUrl = API_URL + '/users/checkSessionClient';
    return this.http.get<any>(sUrl);
  }

  updateLocation(lat: string, lng: string) {
    const sUrl = API_URL + '/users/updateLocationClient';
    const body = JSON.stringify({
      lat,lng
    });
    return this.http.post<any>(sUrl, body);
  }

  findCity(query:any): Observable<any[]> {
    const sUrl = API_URL + '/users/findCityNominatim';
    const body = JSON.stringify({
      query
    });
    return this.http.post<any>(sUrl, body)
        .pipe(map(res => {
          if (res.status) {
            return res.data;
          } else {
            return [];
          }
        }));
  }

  saveCityInfo(city: any) {
    const sUrl = API_URL + '/users/saveCityInfoClient';
    const body = JSON.stringify({
      city
    });
    return this.http.post<any>(sUrl, body);
  }

  setAdrUser(enable: any) {
    const sUrl = API_URL + '/users/setAdrUser';
    const body = JSON.stringify({
      enable
    });
    return this.http.post<any>(sUrl, body);
  }
  addContact(contacts: any) {
    const sUrl = API_URL + '/users/addContact';
    const body = JSON.stringify({
      contacts
    });
    return this.http.post<any>(sUrl, body);
  }
  delContact(id: number) {
    const sUrl = API_URL + '/users/delContact';
    const body = JSON.stringify({
      id
    });
    return this.http.post<any>(sUrl, body);
  }
  addTransport(name:string,description:string,maxweight:number,type:number) {
    const sUrl = API_URL + '/users/addTransport';
    const body = JSON.stringify({
      name,description,maxweight,type
    });
    return this.http.post<any>(sUrl, body);
  }

  acceptDriver(orderid:number,id:number,price_off:number){
    const sUrl = API_URL + '/users/acceptDriverClient';
    const body = JSON.stringify({
      orderid,id,price_off
    });
    return this.http.post<any>(sUrl, body);
  }
  cancelDriver(orderid:number,id:number){
    const sUrl = API_URL + '/users/cancelDriverClient';
    const body = JSON.stringify({
      orderid,id
    });
    return this.http.post<any>(sUrl, body);
  }
  getTypeTruck() {
    const sUrl = API_URL + '/users/getTypeTruck';
    return this.http.get<any>(sUrl)
        .pipe(map(res => {
          if (res.status) {
            return res.data;
          } else {
            return false;
          }
        }));
  }

  getTruck() {
    const sUrl = API_URL + '/users/getMyTrack';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.status) {
          return res.data;
        } else {
          return [];
        }
      }));
  }

  getTypeCargo() {
    const sUrl = API_URL + '/users/getTypeCargo';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.status) {
          return res.data;
        } else {
          return [];
        }
      }));
  }
  getMyOrders() {
    const sUrl = API_URL + '/users/getMyOrdersClient';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.status) {
          return res.data;
        } else {
          return [];
        }
      }));
  }

  getContacts() {
    const sUrl = API_URL + '/users/getContacts';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.status) {
          return res.data;
        } else {
          return [];
        }
      }));
  }


  getNotification() {
    const sUrl = API_URL + '/users/getNotifyClient';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.data) {
          return res.data;
        } else {
          return [];
        }
      }));
  }

  getMessages() {
    const sUrl = API_URL + '/users/getAllMessages';
    return this.http.get<any>(sUrl)
        .pipe(map(res => {
          if (res.data) {
            return res.data;
          } else {
            return [];
          }
        }));
  }
  getAllOrdersFree() {
    const sUrl = API_URL + '/truck-booking/orders';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      }));
  }
  getAllMyOrdersProcessing() {
    const sUrl = API_URL + '/truck-booking?status=processing';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      }));
  }
  getAllMyOrdersDone() {
    const sUrl = API_URL + '/truck-booking?status=done';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      }));
  }

  sendMessage(message:string){
    const sUrl = API_URL + '/users/sendMessageSupport';
    const body = JSON.stringify({
      message
    });
    return this.http.post<any>(sUrl, body);
  }

  cancelOrder(orderid:number){
    const sUrl = API_URL + '/booking-offers/cancel/'+orderid;
    const body = JSON.stringify({
      offerID:orderid
    });
    return this.http.put<any>(sUrl, body);
  }


  setJwt(jwt: string) {
    AuthenticationService.jwt = jwt;
    this.storage.set(TOKEN_KEY, jwt);
    this.authenticationState.next(true);
  }


  async alert(header: string, text: string) {
    const alert = await this.alertController.create({
      header: header,
      message: text,
      cssClass: 'customAlert',
      buttons: [{
        text: 'Хорошо',
        handler: async () => {
        }
      }]
    });
    await alert.present();
  }

  checkToken() {
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        AuthenticationService.jwt = res;
        this.authenticationState.next(true);
        return true;
      } else {
        this.authenticationState.next(false);
        return false;
      }
    });
  }

  saveDeviceToken(token: string) {
    const sUrl = API_URL + '/users/saveDeviceToken';
    const body = JSON.stringify({
      token_device: token
    });
    return this.http.post<any>(sUrl, body);
  }

  logout() {
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  sendNum(phone: string) {
    const sUrl = API_URL + 'users/login';
    const body = JSON.stringify({
      phone: phone
    });
    return this.http.post<any>(sUrl, body);
  }

  codeNum(code: string, phone: string) {
    const sUrl = API_URL + 'users/codeverify';
    const body = JSON.stringify({
      code: code,
      phone: phone
    });
    return this.http.post<any>(sUrl, body);
  }

  addBalance(amount: string) {
    const sUrl = API_URL + '/users/addBalance';
    const body = JSON.stringify({
      amount
    });
    return this.http.post<any>(sUrl, body);
  }

  setRaiting(orderid: string,star: number,comment: string,driverid:string) {
    const sUrl = API_URL + '/users/setRaitingDriver';
    const body = JSON.stringify({
      orderid,star,comment,driverid
    });
    return this.http.post<any>(sUrl, body);
  }
}
