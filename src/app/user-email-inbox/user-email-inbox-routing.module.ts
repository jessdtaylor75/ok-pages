import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserEmailInboxPage } from './user-email-inbox.page';

const routes: Routes = [
  {
    path: '',
    component: UserEmailInboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEmailInboxPageRoutingModule {}
