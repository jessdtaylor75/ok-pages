import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentSuccessSafetypassPage } from './payment-success-safetypass.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentSuccessSafetypassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentSuccessSafetypassPageRoutingModule {}
