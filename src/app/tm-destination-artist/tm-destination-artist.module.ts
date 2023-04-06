import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmDestinationArtistPageRoutingModule } from './tm-destination-artist-routing.module';

import { TmDestinationArtistPage } from './tm-destination-artist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmDestinationArtistPageRoutingModule
  ],
  declarations: [TmDestinationArtistPage]
})
export class TmDestinationArtistPageModule {}
