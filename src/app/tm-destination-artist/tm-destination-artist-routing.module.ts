import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmDestinationArtistPage } from './tm-destination-artist.page';

const routes: Routes = [
  {
    path: '',
    component: TmDestinationArtistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmDestinationArtistPageRoutingModule {}
