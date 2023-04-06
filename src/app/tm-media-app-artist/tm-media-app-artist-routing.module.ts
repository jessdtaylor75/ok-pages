import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmMediaAppArtistPage } from './tm-media-app-artist.page';

const routes: Routes = [
  {
    path: '',
    component: TmMediaAppArtistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmMediaAppArtistPageRoutingModule {}
