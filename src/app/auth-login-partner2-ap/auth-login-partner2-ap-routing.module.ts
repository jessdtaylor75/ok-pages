import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginPartner2ApPage } from './auth-login-partner2-ap.page';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginPartner2ApPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLoginPartner2ApPageRoutingModule {}
