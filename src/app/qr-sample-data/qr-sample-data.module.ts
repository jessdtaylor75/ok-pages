import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrSampleDataPageRoutingModule } from './qr-sample-data-routing.module';

import { QrSampleDataPage } from './qr-sample-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrSampleDataPageRoutingModule
  ],
  declarations: [QrSampleDataPage]
})
export class QrSampleDataPageModule {}
