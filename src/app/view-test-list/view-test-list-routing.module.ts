import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTestListPage } from './view-test-list.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTestListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTestListPageRoutingModule {}
