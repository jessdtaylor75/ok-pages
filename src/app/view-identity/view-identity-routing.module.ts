import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewIdentityPage } from './view-identity.page';

const routes: Routes = [
  {
    path: '',
    component: ViewIdentityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewIdentityPageRoutingModule {}
