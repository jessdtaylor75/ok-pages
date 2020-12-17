import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectHcTestPage } from './connect-hc-test.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectHcTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectHcTestPageRoutingModule {}
