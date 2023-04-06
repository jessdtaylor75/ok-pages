import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmDestinationArtistSelectPageRoutingModule } from './tm-destination-artist-select-routing.module';

import { TmDestinationArtistSelectPage } from './tm-destination-artist-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmDestinationArtistSelectPageRoutingModule
  ],
  declarations: [TmDestinationArtistSelectPage]
})
export class TmDestinationArtistSelectPageModule {}
