import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEmployerListPage } from './view-employer-list.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEmployerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEmployerListPageRoutingModule {}
