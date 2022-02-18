import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewIdcardListPage } from './view-idcard-list.page';

const routes: Routes = [
  {
    path: '',
    component: ViewIdcardListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewIdcardListPageRoutingModule {}
