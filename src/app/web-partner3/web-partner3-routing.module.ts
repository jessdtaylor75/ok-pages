import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner3Page } from './web-partner3.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner3PageRoutingModule {}
