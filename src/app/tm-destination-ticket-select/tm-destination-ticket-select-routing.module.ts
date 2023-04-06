import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmDestinationTicketSelectPage } from './tm-destination-ticket-select.page';

const routes: Routes = [
  {
    path: '',
    component: TmDestinationTicketSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmDestinationTicketSelectPageRoutingModule {}
