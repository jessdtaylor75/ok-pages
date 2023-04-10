import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner1JoinPage } from './web-partner1-join.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner1JoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner1JoinPageRoutingModule {}
