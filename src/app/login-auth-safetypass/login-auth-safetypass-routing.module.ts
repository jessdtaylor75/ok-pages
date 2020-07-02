import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAuthSafetypassPage } from './login-auth-safetypass.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAuthSafetypassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAuthSafetypassPageRoutingModule {}
