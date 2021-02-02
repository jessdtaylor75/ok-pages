import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcClinicalScannerPatientPageRoutingModule } from './hc-clinical-scanner-patient-routing.module';

import { HcClinicalScannerPatientPage } from './hc-clinical-scanner-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcClinicalScannerPatientPageRoutingModule
  ],
  declarations: [HcClinicalScannerPatientPage]
})
export class HcClinicalScannerPatientPageModule {}
