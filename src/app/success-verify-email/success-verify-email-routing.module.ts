import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessVerifyEmailPage } from './success-verify-email.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessVerifyEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessVerifyEmailPageRoutingModule {}
