import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner3LoginPage } from './web-partner3-login.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner3LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner3LoginPageRoutingModule {}
