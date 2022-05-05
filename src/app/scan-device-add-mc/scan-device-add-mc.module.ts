import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanDeviceAddMcPageRoutingModule } from './scan-device-add-mc-routing.module';

import { ScanDeviceAddMcPage } from './scan-device-add-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanDeviceAddMcPageRoutingModule
  ],
  declarations: [ScanDeviceAddMcPage]
})
export class ScanDeviceAddMcPageModule {}
