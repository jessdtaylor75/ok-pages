import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessOcrverifyPageRoutingModule } from './success-ocrverify-routing.module';

import { SuccessOcrverifyPage } from './success-ocrverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessOcrverifyPageRoutingModule
  ],
  declarations: [SuccessOcrverifyPage]
})
export class SuccessOcrverifyPageModule {}
