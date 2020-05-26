import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPersonalInfoPageRoutingModule } from './add-personal-info-routing.module';

import { AddPersonalInfoPage } from './add-personal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPersonalInfoPageRoutingModule
  ],
  declarations: [AddPersonalInfoPage]
})
export class AddPersonalInfoPageModule {}
