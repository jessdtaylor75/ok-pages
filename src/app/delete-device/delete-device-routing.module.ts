import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteDevicePage } from './delete-device.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteDevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteDevicePageRoutingModule {}
