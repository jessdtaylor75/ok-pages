import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInfoMcUnverifiedPageRoutingModule } from './personal-info-mc-unverified-routing.module';

import { PersonalInfoMcUnverifiedPage } from './personal-info-mc-unverified.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalInfoMcUnverifiedPageRoutingModule
  ],
  declarations: [PersonalInfoMcUnverifiedPage]
})
export class PersonalInfoMcUnverifiedPageModule {}
