import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginRefPage } from './auth-login-ref.page';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginRefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLoginRefPageRoutingModule {}
