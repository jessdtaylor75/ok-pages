import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner1LoginPage } from './web-partner1-login.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner1LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner1LoginPageRoutingModule {}
