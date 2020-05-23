import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcStatusClearPage } from './hc-status-clear.page';

const routes: Routes = [
  {
    path: '',
    component: HcStatusClearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcStatusClearPageRoutingModule {}
