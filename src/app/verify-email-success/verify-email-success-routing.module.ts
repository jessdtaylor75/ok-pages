import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyEmailSuccessPage } from './verify-email-success.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyEmailSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyEmailSuccessPageRoutingModule {}
