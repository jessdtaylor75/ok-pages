import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessVerifyServiceMcPage } from './success-verify-service-mc.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessVerifyServiceMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessVerifyServiceMcPageRoutingModule {}
