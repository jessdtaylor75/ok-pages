import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcStatusUnknownPageRoutingModule } from './hc-status-unknown-routing.module';

import { HcStatusUnknownPage } from './hc-status-unknown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcStatusUnknownPageRoutingModule
  ],
  declarations: [HcStatusUnknownPage]
})
export class HcStatusUnknownPageModule {}
