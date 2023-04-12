import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner2LoginTextPage } from './web-partner2-login-text.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner2LoginTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner2LoginTextPageRoutingModule {}
