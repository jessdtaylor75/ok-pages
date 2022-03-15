import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserEmailVerifyPage } from './user-email-verify.page';

const routes: Routes = [
  {
    path: '',
    component: UserEmailVerifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEmailVerifyPageRoutingModule {}
