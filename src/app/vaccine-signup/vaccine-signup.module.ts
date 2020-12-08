import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccineSignupPageRoutingModule } from './vaccine-signup-routing.module';

import { VaccineSignupPage } from './vaccine-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccineSignupPageRoutingModule
  ],
  declarations: [VaccineSignupPage]
})
export class VaccineSignupPageModule {}
