import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHcStatusPage } from './view-hc-status.page';

const routes: Routes = [
  {
    path: '',
    component: ViewHcStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewHcStatusPageRoutingModule {}
