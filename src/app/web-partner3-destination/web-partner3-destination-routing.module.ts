import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner3DestinationPage } from './web-partner3-destination.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner3DestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner3DestinationPageRoutingModule {}
