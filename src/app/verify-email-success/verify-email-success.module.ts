import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyEmailSuccessPageRoutingModule } from './verify-email-success-routing.module';

import { VerifyEmailSuccessPage } from './verify-email-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyEmailSuccessPageRoutingModule
  ],
  declarations: [VerifyEmailSuccessPage]
})
export class VerifyEmailSuccessPageModule {}
