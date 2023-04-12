import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginPartner2McPage } from './auth-login-partner2-mc.page';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginPartner2McPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLoginPartner2McPageRoutingModule {}
