import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmBadgeTicketCodePage } from './tm-badge-ticket-code.page';

const routes: Routes = [
  {
    path: '',
    component: TmBadgeTicketCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmBadgeTicketCodePageRoutingModule {}
