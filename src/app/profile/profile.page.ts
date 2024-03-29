import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from "@ionic/angular";
import { AuthenticationService } from "../services/authentication.service";
import { Router } from "@angular/router";
import { spollers } from "../../assets/scripts/functions";
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { FileTransfer, FileTransferObject, FileUploadOptions } from "@ionic-native/file-transfer/ngx";
import { ChoicecityPage } from "../choicecity/choicecity.page";
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  id: number | undefined;
  phone: string | undefined = '';
  name: string | undefined = '';
  country: string | undefined = 'Выберите';
  city: string | undefined = 'ород';
  constructor(
    private navCtrl: NavController,
    public authService: AuthenticationService,
    private router: Router,
    private modalController: ModalController,
    private alert: AlertController,
    private camera: Camera,
    private transfer: FileTransfer,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.id = this.authService.currentUser?.id
    this.phone = this.authService.currentUser?.phone
    this.name = this.authService.currentUser?.name
    this.country = this.authService.currentUser?.country
    this.city = this.authService.currentUser?.city
  }
  ngAfterViewInit() {
    spollers()
  }
  back() {
    this.navCtrl.back()
  }
  async cropUpload() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.camera.getPicture(options).then((imageData: any) => {
      const fileTransfer: FileTransferObject = this.transfer.create();
      const headers = { 'Authorization': 'Bearer ' + AuthenticationService.jwt };
      const uploadOpts: FileUploadOptions = {
        headers: headers,
        fileKey: 'file',
        mimeType: "image/jpeg",
        chunkedMode: false,
        fileName: imageData.substr(imageData.lastIndexOf('/') + 1)
      };
      uploadOpts.params = { typeUser: 'client', typeImage: 'avatar' };
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
    const { data } = await modal.onWillDismiss();
    if (data && data.city) {
      console.log(data.city.data)
      await this.authService.saveCityInfo(data.city.data).toPromise()
        .then(async (res: any) => {
          if (res.status) {
            this.country = data.city.data.country;
            this.city = data.city.data.city;
            // @ts-ignore
            this.authService.currentUser?.city = data.city.data.city;
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

  async deleteModal() {
    console.log(this.authService.currentUser);
    const alert = await this.alert.create({
      header: 'Вы уверены?',
      message: 'Вы уверены что хотите удалить данного аккаунт?',
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Нет',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => { }
        }, {
          text: 'Да',
          handler: async () => {
            const res = await this.authService.delUser(this.authService.currentUser.id).toPromise()
            if (res.status) {
              await alert.present();
              await this.storage.clear();
              await this.authService.logout();
              await this.router.navigate(['selectlanguage'], { replaceUrl: true });
            } else {
              this.authService.alert('Ошибка', res.error)
            }
          }
        }
      ],
    });
    await alert.present();
  }
}
