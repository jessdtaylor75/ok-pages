import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcStatusC19positivePageRoutingModule } from './hc-status-c19positive-routing.module';

import { HcStatusC19positivePage } from './hc-status-c19positive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcStatusC19positivePageRoutingModule
  ],
  declarations: [HcStatusC19positivePage]
})
export class HcStatusC19positivePageModule {}
