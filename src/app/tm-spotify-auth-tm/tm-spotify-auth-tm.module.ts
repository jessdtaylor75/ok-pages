import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmSpotifyAuthTmPageRoutingModule } from './tm-spotify-auth-tm-routing.module';

import { TmSpotifyAuthTmPage } from './tm-spotify-auth-tm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmSpotifyAuthTmPageRoutingModule
  ],
  declarations: [TmSpotifyAuthTmPage]
})
export class TmSpotifyAuthTmPageModule {}
