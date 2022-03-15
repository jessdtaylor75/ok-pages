import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeProfileSharePageRoutingModule } from './badge-profile-share-routing.module';

import { BadgeProfileSharePage } from './badge-profile-share.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeProfileSharePageRoutingModule
  ],
  declarations: [BadgeProfileSharePage]
})
export class BadgeProfileSharePageModule {}
