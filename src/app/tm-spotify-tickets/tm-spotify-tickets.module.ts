import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmSpotifyTicketsPageRoutingModule } from './tm-spotify-tickets-routing.module';

import { TmSpotifyTicketsPage } from './tm-spotify-tickets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmSpotifyTicketsPageRoutingModule
  ],
  declarations: [TmSpotifyTicketsPage]
})
export class TmSpotifyTicketsPageModule {}
