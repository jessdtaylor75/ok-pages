import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHcAlertsPage } from './view-hc-alerts.page';

const routes: Routes = [
  {
    path: '',
    component: ViewHcAlertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewHcAlertsPageRoutingModule {}
