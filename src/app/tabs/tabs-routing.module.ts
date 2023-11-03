import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home', children:
            [{
              path: '',
              loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
            }]
      },
      {
        path: 'createorder', children:
            [{
              path: '',
              loadChildren: () => import('../createorder/createorder.module').then(m => m.CreateorderPageModule)
            }]
      },
      {
        path: 'orders', children:
            [{
              path: '',
              loadChildren: () => import('../orders/orders.module').then(m => m.OrdersPageModule)
            }]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
