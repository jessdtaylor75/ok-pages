import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteDevicePageRoutingModule } from './delete-device-routing.module';

import { DeleteDevicePage } from './delete-device.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteDevicePageRoutingModule
  ],
  declarations: [DeleteDevicePage]
})
export class DeleteDevicePageModule {}
