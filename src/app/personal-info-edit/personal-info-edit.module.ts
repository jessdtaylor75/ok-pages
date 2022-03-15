import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInfoEditPageRoutingModule } from './personal-info-edit-routing.module';

import { PersonalInfoEditPage } from './personal-info-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalInfoEditPageRoutingModule
  ],
  declarations: [PersonalInfoEditPage]
})
export class PersonalInfoEditPageModule {}
