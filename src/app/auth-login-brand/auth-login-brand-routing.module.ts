import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginBrandPage } from './auth-login-brand.page';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginBrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLoginBrandPageRoutingModule {}
