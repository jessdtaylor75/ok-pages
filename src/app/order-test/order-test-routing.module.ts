import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderTestPage } from './order-test.page';

const routes: Routes = [
  {
    path: '',
    component: OrderTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderTestPageRoutingModule {}
