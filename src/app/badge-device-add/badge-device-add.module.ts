import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeDeviceAddPageRoutingModule } from './badge-device-add-routing.module';

import { BadgeDeviceAddPage } from './badge-device-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeDeviceAddPageRoutingModule
  ],
  declarations: [BadgeDeviceAddPage]
})
export class BadgeDeviceAddPageModule {}
