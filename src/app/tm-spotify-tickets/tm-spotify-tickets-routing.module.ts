import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmSpotifyTicketsPage } from './tm-spotify-tickets.page';

const routes: Routes = [
  {
    path: '',
    component: TmSpotifyTicketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmSpotifyTicketsPageRoutingModule {}
