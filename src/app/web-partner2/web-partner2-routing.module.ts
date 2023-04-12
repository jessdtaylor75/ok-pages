import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner2Page } from './web-partner2.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner2PageRoutingModule {}
