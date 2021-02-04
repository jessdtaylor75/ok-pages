import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasPersonalInfoPageRoutingModule } from './eas-personal-info-routing.module';

import { EasPersonalInfoPage } from './eas-personal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasPersonalInfoPageRoutingModule
  ],
  declarations: [EasPersonalInfoPage]
})
export class EasPersonalInfoPageModule {}
