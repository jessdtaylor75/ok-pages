import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentAuthPage } from './payment-auth.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentAuthPageRoutingModule {}
