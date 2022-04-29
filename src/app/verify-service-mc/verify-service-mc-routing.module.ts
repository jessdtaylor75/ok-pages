import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyServiceMcPage } from './verify-service-mc.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyServiceMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyServiceMcPageRoutingModule {}
