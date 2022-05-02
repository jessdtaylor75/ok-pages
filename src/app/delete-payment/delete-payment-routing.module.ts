import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletePaymentPage } from './delete-payment.page';

const routes: Routes = [
  {
    path: '',
    component: DeletePaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletePaymentPageRoutingModule {}
