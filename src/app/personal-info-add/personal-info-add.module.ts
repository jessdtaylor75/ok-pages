import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInfoAddPageRoutingModule } from './personal-info-add-routing.module';

import { PersonalInfoAddPage } from './personal-info-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalInfoAddPageRoutingModule
  ],
  declarations: [PersonalInfoAddPage]
})
export class PersonalInfoAddPageModule {}
