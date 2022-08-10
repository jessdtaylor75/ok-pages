import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectedAccountsPage } from './connected-accounts.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectedAccountsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectedAccountsPageRoutingModule {}
