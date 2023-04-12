import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner2LoginMcPage } from './web-partner2-login-mc.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner2LoginMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner2LoginMcPageRoutingModule {}
