import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginPartner4Page } from './auth-login-partner4.page';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginPartner4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLoginPartner4PageRoutingModule {}
