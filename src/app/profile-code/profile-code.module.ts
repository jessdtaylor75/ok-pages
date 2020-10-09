import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileCodePageRoutingModule } from './profile-code-routing.module';

import { ProfileCodePage } from './profile-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileCodePageRoutingModule
  ],
  declarations: [ProfileCodePage]
})
export class ProfileCodePageModule {}
