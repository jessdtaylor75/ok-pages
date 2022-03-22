import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginMcPage } from './auth-login-mc.page';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLoginMcPageRoutingModule {}
