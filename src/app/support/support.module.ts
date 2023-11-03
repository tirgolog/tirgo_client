import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportPageRoutingModule } from './support-routing.module';

import { SupportPage } from './support.page';
import {HeaderPageModule} from "../header/header.module";
import {OrderModule} from "ngx-order-pipe";
import {MainPipeModule} from "../pipes/main-pipe.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        OrderModule,
        CommonModule,
        FormsModule,
        IonicModule,
        SupportPageRoutingModule,
        HeaderPageModule,
        MainPipeModule,
        TranslateModule
    ],
  declarations: [SupportPage]
})
export class SupportPageModule {}
