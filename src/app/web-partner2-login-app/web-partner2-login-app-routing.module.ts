import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner2LoginAppPage } from './web-partner2-login-app.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner2LoginAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner2LoginAppPageRoutingModule {}
