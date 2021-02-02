import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcEnterResultPageRoutingModule } from './hc-enter-result-routing.module';

import { HcEnterResultPage } from './hc-enter-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcEnterResultPageRoutingModule
  ],
  declarations: [HcEnterResultPage]
})
export class HcEnterResultPageModule {}
