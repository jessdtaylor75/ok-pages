import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewId3Page } from './view-id3.page';

const routes: Routes = [
  {
    path: '',
    component: ViewId3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewId3PageRoutingModule {}
