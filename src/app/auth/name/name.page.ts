import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {ModalController} from "@ionic/angular";
import {ChoicecityPage} from "../../choicecity/choicecity.page";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {Camera, CameraOptions} from "@awesome-cordova-plugins/camera/ngx";
import {FileTransfer, FileTransferObject, FileUploadOptions} from "@ionic-native/file-transfer/ngx";

@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {
  name:string = '';
  country: string | undefined = 'Выберите';
  city: string | undefined = 'ород';
  constructor(
      public authService: AuthenticationService,
      private router: Router,
      private transfer: FileTransfer,
      private app: AppComponent,
      private camera: Camera,
      private modalController: ModalController
  ) { }

  ngOnInit() {

  }
  async selectRegion() {
    const modal = await this.modalController.create({
      component: ChoicecityPage,
      swipeToClose: true,
      showBackdrop: true,
      breakpoints: [0, 0.9],
      initialBreakpoint: 0.9,
      presentingElement: await this.modalController.getTop(),
      backdropDismiss: true,
      cssClass: 'modalCss',
      mode: 'ios',
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data && data.city) {
      console.log(data.city.data)
      await this.authService.saveCityInfo(data.city.data).toPromise()
          .then(async (res: any) => {
            if (res.status) {
              this.country = data.city.data.country;
              this.city = data.city.data.city ? data.city.data.city : data.city.data.region;
              // @ts-ignore
              this.authService.currentUser?.city = data.city.data.city ? data.city.data.city : data.city.data.region;
              // @ts-ignore
              this.authService.currentUser?.country = data.city.data.country;
            }
          })
          .catch(async (err: any) => {
            console.log(err)
          });
      //this.city = data.city.value;
    }
  }
  async regUser(){
    if (this.name && this.country && this.city){
      await this.authService.regUser(this.name).toPromise()
          .then(async (res) => {
            if (res.status){
              await this.app.checkSession();
              await this.router.navigate(['/tabs/home'], {replaceUrl: true});
            }
          })
          .catch(async (err) => {

          });
    }else {
      this.authService.alert('Упс','Для регистрации требуется указать Ваше Имя и регион.')
    }
  }
  async cropUpload() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.camera.getPicture(options).then((imageData:any) => {
      const fileTransfer: FileTransferObject = this.transfer.create();
      const headers = {'Authorization': 'Bearer ' + AuthenticationService.jwt};
      const uploadOpts: FileUploadOptions = {
        headers: headers,
        fileKey: 'file',
        mimeType: "image/jpeg",
        chunkedMode: false,
        fileName: imageData.substr(imageData.lastIndexOf('/') + 1)
      };
      uploadOpts.params = {typeUser:'client',typeImage:'avatar'};
      fileTransfer.upload(imageData, this.authService.serverApi + '/users/uploadImage', uploadOpts)
          .then((data) => {
            const res = JSON.parse(data.response);
            if (res.status) {
              // @ts-ignore
              this.authService.currentUser.avatar = res.file.preview;
            }
          }, (err) => {
            console.log(err);
          });
    }, (err) => {
      console.log(err);
    });
  }
}
