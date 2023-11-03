import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetraitingPage } from './setraiting.page';

const routes: Routes = [
  {
    path: '',
    component: SetraitingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetraitingPageRoutingModule {}
