import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyIdDocScanPage } from './verify-id-doc-scan.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyIdDocScanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyIdDocScanPageRoutingModule {}
