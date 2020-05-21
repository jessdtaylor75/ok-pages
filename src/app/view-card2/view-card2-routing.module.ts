import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCard2Page } from './view-card2.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCard2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCard2PageRoutingModule {}
