import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessOcrverifyMcPageRoutingModule } from './success-ocrverify-mc-routing.module';

import { SuccessOcrverifyMcPage } from './success-ocrverify-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessOcrverifyMcPageRoutingModule
  ],
  declarations: [SuccessOcrverifyMcPage]
})
export class SuccessOcrverifyMcPageModule {}
