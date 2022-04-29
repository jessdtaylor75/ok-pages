import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanDeviceAddPage } from './scan-device-add.page';

const routes: Routes = [
  {
    path: '',
    component: ScanDeviceAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanDeviceAddPageRoutingModule {}
