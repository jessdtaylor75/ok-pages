import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmMediaAppArtistPageRoutingModule } from './tm-media-app-artist-routing.module';

import { TmMediaAppArtistPage } from './tm-media-app-artist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmMediaAppArtistPageRoutingModule
  ],
  declarations: [TmMediaAppArtistPage]
})
export class TmMediaAppArtistPageModule {}
