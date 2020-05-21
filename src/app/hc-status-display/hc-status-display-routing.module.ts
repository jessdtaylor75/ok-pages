import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcStatusDisplayPage } from './hc-status-display.page';

const routes: Routes = [
  {
    path: '',
    component: HcStatusDisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcStatusDisplayPageRoutingModule {}
