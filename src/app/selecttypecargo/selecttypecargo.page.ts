import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-selecttypecargo',
  templateUrl: './selecttypecargo.page.html',
  styleUrls: ['./selecttypecargo.page.scss'],
})
export class SelecttypecargoPage implements OnInit {
  items:any[] = [];
  constructor(
      public authService: AuthenticationService,
      private modalController: ModalController,
      ) { }

  ngOnInit() {
    this.items = this.authService.typecargo
    console.log(this.items)
  }
  selectTypeCargo(item:any){
    this.modalController.dismiss({
      item
    })
  }
  close(){
    this.modalController.dismiss();
  }

}
