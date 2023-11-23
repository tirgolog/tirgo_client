import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Storage} from "@ionic/storage";
import {AlertController, Platform} from "@ionic/angular";
import {ThemeService} from "./services/theme.service";
import {AuthenticationService} from "./services/authentication.service";
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import {TranslateService} from "@ngx-translate/core";
import {User} from "./user";
import {PushService} from "./services/push.service";
import {SocketService} from "./services/socket.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  host: { "class": "wrapper" }
})
export class AppComponent {
  constructor(
      private platform: Platform,
      private themeService: ThemeService,
      private pushService: PushService,
      public authService: AuthenticationService,
      private socketService: SocketService,
      private storage: Storage,
      private translateService: TranslateService,
      public alertController: AlertController,
      private router: Router,
      private httpClient: HttpClient,
      private geolocation: Geolocation,
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    await this.storage.create();
    await this.storage.get('language').then(val => {
      if (val === 'ru') {
        this.authService.language = 'ru'
        this.translateService.use('ru')
      } else if (val === 'uz') {
        this.authService.language = 'uz'
        this.translateService.use('uz')
      }  else if (val === 'tr') {
        this.authService.language = 'tr'
        this.translateService.use('tr')
      } else {
        this.authService.language = 'ru'
        this.translateService.use('ru')
      }
    });
    await this.authService.checkToken();
    this.authService.authenticationState.subscribe(async res => {
      if (res) {
        await this.checkSession();
      } else {
        await this.router.navigate(['selectlanguage'], {replaceUrl: true});
      }
    })
  }
  async checkSession(){
    await this.authService.checkSession().toPromise().then(async (res) => {
      if (res.status){
        this.authService.currentUser = new User(res.user);
        if (!this.authService.isAuthenticated()) {
          this.authService.authenticationState.next(true);
        }
        if (this.authService.currentUser.name !== null){
          this.socketService.connect();
          if (this.platform.is('cordova')) {
            this.pushService.init();
          }
          this.authService.typetruck = await this.authService.getTypeTruck().toPromise();
          this.authService.mytruck = await this.authService.getTruck().toPromise();
          this.authService.contacts = await this.authService.getContacts().toPromise();
          this.authService.contacts.push({
            id:0,
            user_id:this.authService.currentUser.id,
            type:'phone',
            text:'',
            telegram:0,
            whatsapp:0,
            viber:0,
          })
          this.authService.typecargo = await this.authService.getTypeCargo().toPromise();
          this.authService.myorders = await this.authService.getMyOrders().toPromise();
          this.socketService.updateAllOrders().subscribe(async (res:any) => {
            this.authService.myorders = await this.authService.getMyOrders().toPromise();
          });
          this.authService.messages = await this.authService.getMessages().toPromise();
          this.socketService.updateAllMessages().subscribe(async (res:any) => {
            this.authService.messages = await this.authService.getMessages().toPromise();
          })
          this.authService.notifications = await this.authService.getNotification().toPromise();
          await this.router.navigate(['/tabs/home'], {replaceUrl: true});
          this.geolocation.getCurrentPosition().then(async (resp) => {
            await this.authService.updateLocation(resp.coords.latitude.toString(),resp.coords.longitude.toString()).toPromise();
          })
        }else {
          await this.router.navigate(['/name'], {replaceUrl: true});
        }
      }else {
        this.authService.authenticationState.next(false);
        await this.router.navigate(['selectlanguage'], {replaceUrl: true});
      }
    }).catch(async (err)=>{
      this.authService.authenticationState.next(false);
      await this.router.navigate(['selectlanguage'], {replaceUrl: true});
    })
  }
  initializeApp() {+

    this.platform.ready().then(() => {
      this.themeService.restore();
    });
  }
}
