import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBankPage } from './view-bank.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBankPageRoutingModule {}
