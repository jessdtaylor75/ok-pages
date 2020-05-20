import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAddressListPage } from './view-address-list.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAddressListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAddressListPageRoutingModule {}
