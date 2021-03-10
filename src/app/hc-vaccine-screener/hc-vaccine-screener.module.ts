import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcVaccineScreenerPageRoutingModule } from './hc-vaccine-screener-routing.module';

import { HcVaccineScreenerPage } from './hc-vaccine-screener.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcVaccineScreenerPageRoutingModule
  ],
  declarations: [HcVaccineScreenerPage]
})
export class HcVaccineScreenerPageModule {}
