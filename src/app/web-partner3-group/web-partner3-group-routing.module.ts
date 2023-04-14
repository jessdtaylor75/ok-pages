import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner3GroupPage } from './web-partner3-group.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner3GroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner3GroupPageRoutingModule {}
