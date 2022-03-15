import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPaymentPageRoutingModule } from './auth-payment-routing.module';

import { AuthPaymentPage } from './auth-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPaymentPageRoutingModule
  ],
  declarations: [AuthPaymentPage]
})
export class AuthPaymentPageModule {}
