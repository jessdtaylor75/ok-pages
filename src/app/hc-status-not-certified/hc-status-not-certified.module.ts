import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcStatusNotCertifiedPageRoutingModule } from './hc-status-not-certified-routing.module';

import { HcStatusNotCertifiedPage } from './hc-status-not-certified.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcStatusNotCertifiedPageRoutingModule
  ],
  declarations: [HcStatusNotCertifiedPage]
})
export class HcStatusNotCertifiedPageModule {}
