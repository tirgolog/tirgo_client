import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalancepayPage } from './balancepay.page';

const routes: Routes = [
  {
    path: '',
    component: BalancepayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancepayPageRoutingModule {}
