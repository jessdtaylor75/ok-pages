import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCard1Page } from './view-card1.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCard1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCard1PageRoutingModule {}
