import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilitaryConnectPage } from './military-connect.page';

const routes: Routes = [
  {
    path: '',
    component: MilitaryConnectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MilitaryConnectPageRoutingModule {}
