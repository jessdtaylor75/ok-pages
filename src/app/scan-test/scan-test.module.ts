import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanTestPageRoutingModule } from './scan-test-routing.module';

import { ScanTestPage } from './scan-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanTestPageRoutingModule
  ],
  declarations: [ScanTestPage]
})
export class ScanTestPageModule {}
