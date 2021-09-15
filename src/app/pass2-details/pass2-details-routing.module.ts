import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pass2DetailsPage } from './pass2-details.page';

const routes: Routes = [
  {
    path: '',
    component: Pass2DetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pass2DetailsPageRoutingModule {}
