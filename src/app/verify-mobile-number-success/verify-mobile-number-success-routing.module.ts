import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyMobileNumberSuccessPage } from './verify-mobile-number-success.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyMobileNumberSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyMobileNumberSuccessPageRoutingModule {}
