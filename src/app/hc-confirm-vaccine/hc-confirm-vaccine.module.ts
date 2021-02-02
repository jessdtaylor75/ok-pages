import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcConfirmVaccinePageRoutingModule } from './hc-confirm-vaccine-routing.module';

import { HcConfirmVaccinePage } from './hc-confirm-vaccine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcConfirmVaccinePageRoutingModule
  ],
  declarations: [HcConfirmVaccinePage]
})
export class HcConfirmVaccinePageModule {}
