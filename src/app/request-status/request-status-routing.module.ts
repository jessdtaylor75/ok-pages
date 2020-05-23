import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestStatusPage } from './request-status.page';

const routes: Routes = [
  {
    path: '',
    component: RequestStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestStatusPageRoutingModule {}
