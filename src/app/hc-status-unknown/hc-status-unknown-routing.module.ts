import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcStatusUnknownPage } from './hc-status-unknown.page';

const routes: Routes = [
  {
    path: '',
    component: HcStatusUnknownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcStatusUnknownPageRoutingModule {}
