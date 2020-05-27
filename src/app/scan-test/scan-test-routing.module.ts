import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanTestPage } from './scan-test.page';

const routes: Routes = [
  {
    path: '',
    component: ScanTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanTestPageRoutingModule {}
