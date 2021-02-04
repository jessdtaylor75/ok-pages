import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasHomeScannerPage } from './eas-home-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: EasHomeScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasHomeScannerPageRoutingModule {}
