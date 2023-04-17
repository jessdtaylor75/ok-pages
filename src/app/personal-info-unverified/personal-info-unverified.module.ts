import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInfoUnverifiedPageRoutingModule } from './personal-info-unverified-routing.module';

import { PersonalInfoUnverifiedPage } from './personal-info-unverified.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalInfoUnverifiedPageRoutingModule
  ],
  declarations: [PersonalInfoUnverifiedPage]
})
export class PersonalInfoUnverifiedPageModule {}
