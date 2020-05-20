import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewIdListPage } from './view-id-list.page';

const routes: Routes = [
  {
    path: '',
    component: ViewIdListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewIdListPageRoutingModule {}
