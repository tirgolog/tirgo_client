import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  amount:string = '';
  constructor(
      private navCtrl: NavController,
      public authService: AuthenticationService,
      private router: Router,
  ) { }

  ngOnInit() {
  }
  back(){
    this.navCtrl.back()
  }
  async goToPay(){
    await this.router.navigate(['/balancepay'])
  }
  async payClickPay(){
    if (this.amount!==''){
      const res = await this.authService.addBalance(this.amount).toPromise();
      if (res.status){
        // @ts-ignore
        this.authService.currentUser?.balance = +this.authService.currentUser?.balance + +this.amount
        await this.authService.alert('Отлично','Ваш баланс успешно пополнен.')
        this.amount = '';
      }
    }else {
      await this.authService.alert('Упс','Требуется ввести сумму платежа.')
    }
  }
}
