import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserMildealsPageRoutingModule } from './browser-mildeals-routing.module';

import { BrowserMildealsPage } from './browser-mildeals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserMildealsPageRoutingModule
  ],
  declarations: [BrowserMildealsPage]
})
export class BrowserMildealsPageModule {}
