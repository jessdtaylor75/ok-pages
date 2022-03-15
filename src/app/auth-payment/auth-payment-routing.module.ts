import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPaymentPage } from './auth-payment.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPaymentPageRoutingModule {}
