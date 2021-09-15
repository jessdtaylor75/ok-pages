import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassDetailsPage } from './pass-details.page';

const routes: Routes = [
  {
    path: '',
    component: PassDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassDetailsPageRoutingModule {}
