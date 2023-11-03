import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-balancepay',
  templateUrl: './balancepay.page.html',
  styleUrls: ['./balancepay.page.scss'],
})
export class BalancepayPage implements OnInit {

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
}
