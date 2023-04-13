import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner4DestinationPage } from './web-partner4-destination.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner4DestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner4DestinationPageRoutingModule {}
