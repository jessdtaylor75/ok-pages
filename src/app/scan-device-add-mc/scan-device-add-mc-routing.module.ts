import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanDeviceAddMcPage } from './scan-device-add-mc.page';

const routes: Routes = [
  {
    path: '',
    component: ScanDeviceAddMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanDeviceAddMcPageRoutingModule {}
