import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner1Page } from './web-partner1.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner1PageRoutingModule {}
