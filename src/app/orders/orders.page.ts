import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {CallNumber} from "@ionic-native/call-number/ngx";
import {ModalController, Platform} from "@ionic/angular";
import {Router} from "@angular/router";
import {SetraitingPage} from "../setraiting/setraiting.page";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(
      public authService: AuthenticationService,
      public platform: Platform,
      private router: Router,
      private modalCtrl: ModalController,
      private callNumber: CallNumber,
      ) {
  }

  ngOnInit() { }

  returnNameTypeTransport(type:number){
    const index = this.authService.typetruck.findIndex(e => +e.id === +type)
    if (index>=0){
      return this.authService.typetruck[index].name
    }else {
      return 'Не выбрано'
    }
  }
  returnNameCargoType(id:number){
    const index = this.authService.typecargo.findIndex(e => +e.id === +id);
    if (index>=0){
      return this.authService.typecargo[index].name
    }else {
      return 'Не выбрано'
    }
  }
  getAcceptedDriver(id:number){
    const index = this.authService.myorders.findIndex(e => e.id === id)
    if (index>=0){
      if (this.authService.myorders[index].orders_accepted && this.authService.myorders[index].orders_accepted.length){
        const indexUser = this.authService.myorders[index].orders_accepted.findIndex((e: { status_order: number; }) => e.status_order === 1)
        if (indexUser >=0){
          return this.authService.myorders[index].orders_accepted[indexUser]
        }
      }
    }
  }
  callMan(phone:string){
    this.callNumber.callNumber('+'+phone, true)
  }
  async setRaitingDriver(orderid:number,driverid:string){
    const modal = await this.modalCtrl.create({
      component: SetraitingPage,
      swipeToClose: true,
      showBackdrop: true,
      breakpoints: [0, 0.6],
      initialBreakpoint: 0.6,
      presentingElement: await this.modalCtrl.getTop(),
      backdropDismiss: true,
      cssClass: 'modalCss',
      mode: 'ios',
      componentProps: {
        orderid:orderid,
        driverid:driverid,
      }
    });
    await modal.present();
  }
}
