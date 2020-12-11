import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyHcStatusPage } from './my-hc-status.page';

const routes: Routes = [
  {
    path: '',
    component: MyHcStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyHcStatusPageRoutingModule {}
