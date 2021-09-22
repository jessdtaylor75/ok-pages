import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pass3DetailsPage } from './pass3-details.page';

const routes: Routes = [
  {
    path: '',
    component: Pass3DetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pass3DetailsPageRoutingModule {}
