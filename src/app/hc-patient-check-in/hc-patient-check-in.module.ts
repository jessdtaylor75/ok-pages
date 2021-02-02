import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcPatientCheckInPageRoutingModule } from './hc-patient-check-in-routing.module';

import { HcPatientCheckInPage } from './hc-patient-check-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcPatientCheckInPageRoutingModule
  ],
  declarations: [HcPatientCheckInPage]
})
export class HcPatientCheckInPageModule {}
