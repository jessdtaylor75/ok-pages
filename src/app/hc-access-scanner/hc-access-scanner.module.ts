import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcAccessScannerPageRoutingModule } from './hc-access-scanner-routing.module';

import { HcAccessScannerPage } from './hc-access-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcAccessScannerPageRoutingModule
  ],
  declarations: [HcAccessScannerPage]
})
export class HcAccessScannerPageModule {}
