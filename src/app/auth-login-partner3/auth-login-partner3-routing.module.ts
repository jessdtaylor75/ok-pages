import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginPartner3Page } from './auth-login-partner3.page';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginPartner3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLoginPartner3PageRoutingModule {}
