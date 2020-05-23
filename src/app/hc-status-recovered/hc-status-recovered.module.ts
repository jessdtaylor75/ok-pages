import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcStatusRecoveredPageRoutingModule } from './hc-status-recovered-routing.module';

import { HcStatusRecoveredPage } from './hc-status-recovered.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcStatusRecoveredPageRoutingModule
  ],
  declarations: [HcStatusRecoveredPage]
})
export class HcStatusRecoveredPageModule {}
