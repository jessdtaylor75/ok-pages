import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessDeviceConnectedPage } from './success-device-connected.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessDeviceConnectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessDeviceConnectedPageRoutingModule {}
