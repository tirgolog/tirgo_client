import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {ApiInterceptor} from "./services/api.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicStorageModule} from "@ionic/storage-angular";
import {Drivers} from "@ionic/storage";
import {NgxMaskIonicModule} from "ngx-mask-ionic";
import {Geolocation} from '@awesome-cordova-plugins/geolocation/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {ChoicecityPage} from "./choicecity/choicecity.page";
import {MenuPageModule} from "./menu/menu.module";
import {SelecttypecargoPage} from "./selecttypecargo/selecttypecargo.page";
import ruLocale from '@angular/common/locales/ru';
import {registerLocaleData} from "@angular/common";
import {CallNumber} from "@ionic-native/call-number/ngx";
import {Push} from "@awesome-cordova-plugins/push/ngx";
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import {FileTransfer } from "@ionic-native/file-transfer/ngx";
import {InAppBrowser} from "@ionic-native/in-app-browser/ngx";

registerLocaleData(ruLocale);

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        ChoicecityPage,
        SelecttypecargoPage
    ],
    entryComponents: [
        ChoicecityPage,
        SelecttypecargoPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot({mode: 'ios'}),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMaskIonicModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        IonicStorageModule.forRoot({
            name: '__tirgoclient',
            driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
        }),
        AppRoutingModule,
        MenuPageModule
    ],
    providers: [
        InAppBrowser,
        CallNumber,
        Geolocation,
        StatusBar,
        Camera,
        FileTransfer,
        Push,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true,
        },
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {
}
