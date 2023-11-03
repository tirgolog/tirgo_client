import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {AlertController, ModalController, NavController} from "@ionic/angular";
import {AuthenticationService} from "../../services/authentication.service";
import {Storage} from "@ionic/storage";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

    phone: string = '';
    prefix: string = '+998';
    flag: string = '🇺🇿';
    code: string = '';
    mask: string = '(00) 000-00-00';
    codeon: boolean = false;
    error: boolean = false;
    searchinput: string = '';
    phonescodesOriginal: any;
    phonescodes: any;
    policy:boolean = false;
    offer:boolean = false;
    loading:boolean = false;
    timer:number = 59;

    constructor(
        private router: Router,
        private app: AppComponent,
        private storage: Storage,
        private modalCtrl: ModalController,
        private httpClient: HttpClient,
        public authService: AuthenticationService,
        private navCtrl: NavController,
        public alertController: AlertController
    ) {
    }

    ngOnInit() {
        this.getJSONFromLocal().subscribe(
            data => {
                this.phonescodesOriginal = data;
                this.phonescodes = this.phonescodesOriginal;
            },
            error => console.error(`Failed because: ${error}`));
    }
    public getJSONFromLocal(): Observable<any> {
        return this.httpClient.get("./assets/json/phone.json");
    }
    async signIn() {
        this.loading = true;
        if (this.phone.length < this.mask.length){
            await this.authService.alert('Ошибка','Введите корректный номер телефона')
            this.loading = false;
        }else if (!this.offer) {
            await this.authService.alert('Ошибка', 'Требуется принять публичную оферту')
            this.loading = false;
        } else if (!this.policy) {
            await this.authService.alert('Ошибка', 'Требуется принять политику конфиденциальности')
            this.loading = false;
        } else {
            await this.authService.loginUser(this.prefix + '' + this.phone).toPromise()
                .then(async (res) => {
                    if (res.status) {
                        this.codeon = true;
                        this.loading = false;
                        this.timer = 59;
                        setInterval(() => {
                            if (this.timer > 0){
                                this.timer = this.timer - 1
                            }
                        }, 1000);
                    }
                    this.error = false;
                })
                .catch(async (err) => {
                    this.error = true;
                    this.loading = false;
                });
        }
    }

    async verifyCode() {
        this.loading = true;
        await this.authService.verifyCode(this.prefix + '' + this.phone, this.code).toPromise()
            .then(async (res) => {
                if (res.status) {
                    await this.authService.setJwt(res.token);
                    this.loading = false;
                    //await this.app.checkSession()
                }else {
                    await this.authService.alert('Ошибка',res.text)
                    this.loading = false;
                }
                this.error = false;
            })
            .catch(async (err) => {
                this.loading = false;
                this.error = true;
            });
    }


    findPhoneCode(ev: any) {
        this.searchinput = ev.target.value
        this.phonescodes = this.phonescodesOriginal.filter((row: any) => {
            return !row.name ? row.name : row.name.toLowerCase().includes(this.searchinput.toLowerCase()) ||
            !row.code ? row.code : row.code.toLowerCase().includes(this.searchinput.toLowerCase()) ||
            !row.dial_code ? row.dial_code : row.dial_code.toLowerCase().includes(this.searchinput.toLowerCase());
        });
    }

    selectCode(item: any) {
        this.modalCtrl.dismiss();
        this.prefix = item.dial_code;
        this.flag = item.flag;
        this.mask = item.mask;
    }

}
