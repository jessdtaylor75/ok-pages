import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmSpotifyAuthTmPage } from './tm-spotify-auth-tm.page';

const routes: Routes = [
  {
    path: '',
    component: TmSpotifyAuthTmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmSpotifyAuthTmPageRoutingModule {}
