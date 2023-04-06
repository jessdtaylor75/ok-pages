import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmDestinationArtistSelectPage } from './tm-destination-artist-select.page';

const routes: Routes = [
  {
    path: '',
    component: TmDestinationArtistSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmDestinationArtistSelectPageRoutingModule {}
