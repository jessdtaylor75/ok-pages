import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrSampleDataPage } from './qr-sample-data.page';

const routes: Routes = [
  {
    path: '',
    component: QrSampleDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrSampleDataPageRoutingModule {}
