import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcTestScreenerPageRoutingModule } from './hc-test-screener-routing.module';

import { HcTestScreenerPage } from './hc-test-screener.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcTestScreenerPageRoutingModule
  ],
  declarations: [HcTestScreenerPage]
})
export class HcTestScreenerPageModule {}
