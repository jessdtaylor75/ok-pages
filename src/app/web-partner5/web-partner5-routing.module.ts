import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner5Page } from './web-partner5.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner5PageRoutingModule {}
