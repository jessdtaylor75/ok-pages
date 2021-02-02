import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcClinicalScannerPageRoutingModule } from './hc-clinical-scanner-routing.module';

import { HcClinicalScannerPage } from './hc-clinical-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcClinicalScannerPageRoutingModule
  ],
  declarations: [HcClinicalScannerPage]
})
export class HcClinicalScannerPageModule {}
