import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcConfirmSamplePageRoutingModule } from './hc-confirm-sample-routing.module';

import { HcConfirmSamplePage } from './hc-confirm-sample.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcConfirmSamplePageRoutingModule
  ],
  declarations: [HcConfirmSamplePage]
})
export class HcConfirmSamplePageModule {}
