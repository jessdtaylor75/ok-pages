import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcStatusClearPageRoutingModule } from './hc-status-clear-routing.module';

import { HcStatusClearPage } from './hc-status-clear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcStatusClearPageRoutingModule
  ],
  declarations: [HcStatusClearPage]
})
export class HcStatusClearPageModule {}
