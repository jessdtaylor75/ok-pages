import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyIdDocScanPageRoutingModule } from './verify-id-doc-scan-routing.module';

import { VerifyIdDocScanPage } from './verify-id-doc-scan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyIdDocScanPageRoutingModule
  ],
  declarations: [VerifyIdDocScanPage]
})
export class VerifyIdDocScanPageModule {}
