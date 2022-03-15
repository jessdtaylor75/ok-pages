import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserPExamplePageRoutingModule } from './browser-p-example-routing.module';

import { BrowserPExamplePage } from './browser-p-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserPExamplePageRoutingModule
  ],
  declarations: [BrowserPExamplePage]
})
export class BrowserPExamplePageModule {}
