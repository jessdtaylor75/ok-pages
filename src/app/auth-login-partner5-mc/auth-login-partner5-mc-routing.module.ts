import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginPartner5McPage } from './auth-login-partner5-mc.page';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginPartner5McPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLoginPartner5McPageRoutingModule {}
