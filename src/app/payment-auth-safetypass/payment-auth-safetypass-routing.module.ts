import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentAuthSafetypassPage } from './payment-auth-safetypass.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentAuthSafetypassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentAuthSafetypassPageRoutingModule {}
