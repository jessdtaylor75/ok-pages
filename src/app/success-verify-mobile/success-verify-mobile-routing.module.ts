import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessVerifyMobilePage } from './success-verify-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessVerifyMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessVerifyMobilePageRoutingModule {}
