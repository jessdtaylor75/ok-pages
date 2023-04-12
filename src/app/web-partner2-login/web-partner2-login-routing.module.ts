import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner2LoginPage } from './web-partner2-login.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner2LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner2LoginPageRoutingModule {}
