import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcrVerifyMcPageRoutingModule } from './ocr-verify-mc-routing.module';

import { OcrVerifyMcPage } from './ocr-verify-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcrVerifyMcPageRoutingModule
  ],
  declarations: [OcrVerifyMcPage]
})
export class OcrVerifyMcPageModule {}
