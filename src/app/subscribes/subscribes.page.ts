import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {spollers} from "../../assets/scripts/functions";

@Component({
  selector: 'app-subscribes',
  templateUrl: './subscribes.page.html',
  styleUrls: ['./subscribes.page.scss'],
})
export class SubscribesPage implements OnInit {

  constructor(
      private navCtrl: NavController,
      public authService: AuthenticationService,
      private router: Router,
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    spollers()
  }
  back(){
    this.navCtrl.back()
  }
}
