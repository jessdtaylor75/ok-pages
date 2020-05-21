import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcStatusDisplayPageRoutingModule } from './hc-status-display-routing.module';

import { HcStatusDisplayPage } from './hc-status-display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcStatusDisplayPageRoutingModule
  ],
  declarations: [HcStatusDisplayPage]
})
export class HcStatusDisplayPageModule {}
