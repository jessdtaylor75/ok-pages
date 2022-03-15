import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessVerifyEmailPageRoutingModule } from './success-verify-email-routing.module';

import { SuccessVerifyEmailPage } from './success-verify-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessVerifyEmailPageRoutingModule
  ],
  declarations: [SuccessVerifyEmailPage]
})
export class SuccessVerifyEmailPageModule {}
