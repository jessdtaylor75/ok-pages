import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanEmailPage } from './scan-email.page';

const routes: Routes = [
  {
    path: '',
    component: ScanEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanEmailPageRoutingModule {}
