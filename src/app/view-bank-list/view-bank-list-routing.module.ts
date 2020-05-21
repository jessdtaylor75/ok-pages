import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBankListPage } from './view-bank-list.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBankListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBankListPageRoutingModule {}
