import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmSpotifyOfferPage } from './tm-spotify-offer.page';

const routes: Routes = [
  {
    path: '',
    component: TmSpotifyOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmSpotifyOfferPageRoutingModule {}
