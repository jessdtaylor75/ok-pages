import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcStatusPendingPageRoutingModule } from './hc-status-pending-routing.module';

import { HcStatusPendingPage } from './hc-status-pending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcStatusPendingPageRoutingModule
  ],
  declarations: [HcStatusPendingPage]
})
export class HcStatusPendingPageModule {}
