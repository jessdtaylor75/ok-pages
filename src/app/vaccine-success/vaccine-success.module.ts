import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccineSuccessPageRoutingModule } from './vaccine-success-routing.module';

import { VaccineSuccessPage } from './vaccine-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccineSuccessPageRoutingModule
  ],
  declarations: [VaccineSuccessPage]
})
export class VaccineSuccessPageModule {}
