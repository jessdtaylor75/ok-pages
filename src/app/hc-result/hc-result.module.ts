import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcResultPageRoutingModule } from './hc-result-routing.module';

import { HcResultPage } from './hc-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcResultPageRoutingModule
  ],
  declarations: [HcResultPage]
})
export class HcResultPageModule {}
