import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserApMembersPage } from './browser-ap-members.page';

const routes: Routes = [
  {
    path: '',
    component: BrowserApMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserApMembersPageRoutingModule {}
