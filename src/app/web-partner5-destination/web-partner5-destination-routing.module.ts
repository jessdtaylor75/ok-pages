import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner5DestinationPage } from './web-partner5-destination.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner5DestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner5DestinationPageRoutingModule {}
