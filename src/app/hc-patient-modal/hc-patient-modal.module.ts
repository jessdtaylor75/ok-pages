import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcPatientModalPageRoutingModule } from './hc-patient-modal-routing.module';

import { HcPatientModalPage } from './hc-patient-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcPatientModalPageRoutingModule
  ],
  declarations: [HcPatientModalPage]
})
export class HcPatientModalPageModule {}
