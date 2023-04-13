import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner4LoginAppPage } from './web-partner4-login-app.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner4LoginAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner4LoginAppPageRoutingModule {}
