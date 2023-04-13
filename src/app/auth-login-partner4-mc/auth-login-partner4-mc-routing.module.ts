import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginPartner4McPage } from './auth-login-partner4-mc.page';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginPartner4McPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLoginPartner4McPageRoutingModule {}
