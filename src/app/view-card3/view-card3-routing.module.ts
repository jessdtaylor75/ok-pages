import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCard3Page } from './view-card3.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCard3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCard3PageRoutingModule {}
