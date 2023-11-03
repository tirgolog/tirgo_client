import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetraitingPageRoutingModule } from './setraiting-routing.module';

import { SetraitingPage } from './setraiting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetraitingPageRoutingModule
  ],
  declarations: [SetraitingPage]
})
export class SetraitingPageModule {}
