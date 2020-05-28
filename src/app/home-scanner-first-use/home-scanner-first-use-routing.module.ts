import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScannerFirstUsePage } from './home-scanner-first-use.page';

const routes: Routes = [
  {
    path: '',
    component: HomeScannerFirstUsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeScannerFirstUsePageRoutingModule {}
