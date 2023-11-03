import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalancepayPageRoutingModule } from './balancepay-routing.module';

import { BalancepayPage } from './balancepay.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BalancepayPageRoutingModule,
        TranslateModule
    ],
  declarations: [BalancepayPage]
})
export class BalancepayPageModule {}
