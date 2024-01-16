import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { NgxMaskIonicModule } from "ngx-mask-ionic";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    NgxMaskIonicModule,
    TranslateModule,
  ],
  declarations: [ProfilePage],
    providers: [Storage]
})
export class ProfilePageModule { }
