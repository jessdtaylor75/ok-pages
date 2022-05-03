import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInfoMcPageRoutingModule } from './personal-info-mc-routing.module';

import { PersonalInfoMcPage } from './personal-info-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalInfoMcPageRoutingModule
  ],
  declarations: [PersonalInfoMcPage]
})
export class PersonalInfoMcPageModule {}
