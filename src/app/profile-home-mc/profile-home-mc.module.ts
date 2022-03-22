import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileHomeMcPageRoutingModule } from './profile-home-mc-routing.module';

import { ProfileHomeMcPage } from './profile-home-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileHomeMcPageRoutingModule
  ],
  declarations: [ProfileHomeMcPage]
})
export class ProfileHomeMcPageModule {}
