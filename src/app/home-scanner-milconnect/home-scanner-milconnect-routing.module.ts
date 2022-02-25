import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScannerMilconnectPage } from './home-scanner-milconnect.page';

const routes: Routes = [
  {
    path: '',
    component: HomeScannerMilconnectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeScannerMilconnectPageRoutingModule {}
