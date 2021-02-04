import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasProfileHomePageRoutingModule } from './eas-profile-home-routing.module';

import { EasProfileHomePage } from './eas-profile-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasProfileHomePageRoutingModule
  ],
  declarations: [EasProfileHomePage]
})
export class EasProfileHomePageModule {}
