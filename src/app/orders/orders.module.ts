import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPageRoutingModule } from './orders-routing.module';

import { OrdersPage } from './orders.page';
import {HeaderPageModule} from "../header/header.module";
import {MainPipeModule} from "../pipes/main-pipe.module";
import {NgxMaskIonicModule} from "ngx-mask-ionic";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrdersPageRoutingModule,
        HeaderPageModule,
        MainPipeModule,
        NgxMaskIonicModule,
        TranslateModule
    ],
  declarations: [OrdersPage]
})
export class OrdersPageModule {}
