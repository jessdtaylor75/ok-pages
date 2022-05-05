import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessDeviceConnectedPageRoutingModule } from './success-device-connected-routing.module';

import { SuccessDeviceConnectedPage } from './success-device-connected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessDeviceConnectedPageRoutingModule
  ],
  declarations: [SuccessDeviceConnectedPage]
})
export class SuccessDeviceConnectedPageModule {}
