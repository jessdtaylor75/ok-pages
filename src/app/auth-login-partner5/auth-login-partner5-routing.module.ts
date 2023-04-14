import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginPartner5Page } from './auth-login-partner5.page';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginPartner5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLoginPartner5PageRoutingModule {}
