import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Storage} from "@ionic/storage";
import {AlertController, MenuController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  modalExit:boolean = false;
  constructor(
      public alertController: AlertController,
      private menu: MenuController,
      private storage: Storage,
      private router: Router,
      public authService:AuthenticationService
  ) { }

  ngOnInit() {
  }

  async logOut(){
    this.menu.toggle();
    //this.modalExit = true;
    const alert = await this.alertController.create({
      header: 'Вы уверены?',
      message: 'Вы действительно хотите выйти?',
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Нет',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Выйти',
          role: 'destructive',
          handler: async () => {
            await alert.present();
            await this.storage.clear();
            await this.authService.logout();
            await this.router.navigate(['selectlanguage'], {replaceUrl: true});
            //await this.logOutFull()
          }
        }
      ]
    });
    await alert.present();
  }
  async closeModal(){
    this.modalExit = false;
  }
  async logOutFull(){
    const alert = await this.alertController.create({
      header: 'Выход из аккаунта',
      message:'Вы уверены что хотите выйти из аккаунта?',
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Нет',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Выйти',
          role: 'destructive',
          handler: async () => {
            await alert.present();
            await this.storage.clear();
            await this.authService.logout();
            await this.router.navigate(['selectlanguage'], {replaceUrl: true});
          }
        }
      ],
    });
    await alert.present();
  }
  async goTo(page:string,replace:boolean){
    await this.router.navigate([page], {replaceUrl: replace});
    await this.menu.toggle();
  }

}
