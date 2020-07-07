import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewId2Page } from './view-id2.page';

const routes: Routes = [
  {
    path: '',
    component: ViewId2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewId2PageRoutingModule {}
