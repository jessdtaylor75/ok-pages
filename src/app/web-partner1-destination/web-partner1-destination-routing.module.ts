import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner1DestinationPage } from './web-partner1-destination.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner1DestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner1DestinationPageRoutingModule {}
