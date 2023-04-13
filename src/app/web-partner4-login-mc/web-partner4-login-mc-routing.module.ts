import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner4LoginMcPage } from './web-partner4-login-mc.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner4LoginMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner4LoginMcPageRoutingModule {}
