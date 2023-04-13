import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner4Page } from './web-partner4.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner4PageRoutingModule {}
