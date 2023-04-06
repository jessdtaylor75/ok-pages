import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmBadgeTicketPage } from './tm-badge-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: TmBadgeTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmBadgeTicketPageRoutingModule {}
