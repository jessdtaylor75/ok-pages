import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyMobileNumberSuccessPageRoutingModule } from './verify-mobile-number-success-routing.module';

import { VerifyMobileNumberSuccessPage } from './verify-mobile-number-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyMobileNumberSuccessPageRoutingModule
  ],
  declarations: [VerifyMobileNumberSuccessPage]
})
export class VerifyMobileNumberSuccessPageModule {}
