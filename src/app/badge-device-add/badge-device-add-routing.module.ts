import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeDeviceAddPage } from './badge-device-add.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeDeviceAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeDeviceAddPageRoutingModule {}
