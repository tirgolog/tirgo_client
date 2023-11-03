import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  message:string = '';
  disablebuttonsend:boolean = false;
  constructor(
      private navCtrl: NavController,
      public authService: AuthenticationService,
      private router: Router,
  ) { }

  ngOnInit() {
  }

  async doRefresh(event:any) {
    this.authService.messages = await this.authService.getMessages().toPromise();
    setTimeout(() => {
      event.target.complete();
    }, 1000)
  }
  back(){
    this.navCtrl.back()
  }
  sendMessage(){
    this.disablebuttonsend = true;
    this.authService.sendMessage(this.message).toPromise().then((res) => {
      this.authService.messages.push(res.data)
      this.disablebuttonsend = false;
      this.message = '';
    }).catch((err)=>{
      this.authService.alert('Упс','Не удалось отправить сообщение попробуйте позже')
    })
  }
}
