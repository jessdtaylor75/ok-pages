import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanDeviceAddPageRoutingModule } from './scan-device-add-routing.module';

import { ScanDeviceAddPage } from './scan-device-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanDeviceAddPageRoutingModule
  ],
  declarations: [ScanDeviceAddPage]
})
export class ScanDeviceAddPageModule {}
