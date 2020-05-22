import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTestDetailsPage } from './view-test-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTestDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTestDetailsPageRoutingModule {}
