import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserEmailVerifyPartner1Page } from './user-email-verify-partner1.page';

const routes: Routes = [
  {
    path: '',
    component: UserEmailVerifyPartner1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEmailVerifyPartner1PageRoutingModule {}
