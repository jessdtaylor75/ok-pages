import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmSpotifyOfferPageRoutingModule } from './tm-spotify-offer-routing.module';

import { TmSpotifyOfferPage } from './tm-spotify-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmSpotifyOfferPageRoutingModule
  ],
  declarations: [TmSpotifyOfferPage]
})
export class TmSpotifyOfferPageModule {}
