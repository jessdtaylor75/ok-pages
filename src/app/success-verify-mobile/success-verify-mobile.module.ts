import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessVerifyMobilePageRoutingModule } from './success-verify-mobile-routing.module';

import { SuccessVerifyMobilePage } from './success-verify-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessVerifyMobilePageRoutingModule
  ],
  declarations: [SuccessVerifyMobilePage]
})
export class SuccessVerifyMobilePageModule {}
