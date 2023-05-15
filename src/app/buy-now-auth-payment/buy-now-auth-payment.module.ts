import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyNowAuthPaymentPageRoutingModule } from './buy-now-auth-payment-routing.module';

import { BuyNowAuthPaymentPage } from './buy-now-auth-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyNowAuthPaymentPageRoutingModule
  ],
  declarations: [BuyNowAuthPaymentPage]
})
export class BuyNowAuthPaymentPageModule {}
