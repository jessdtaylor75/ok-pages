import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentSuccessSafetypassPageRoutingModule } from './payment-success-safetypass-routing.module';

import { PaymentSuccessSafetypassPage } from './payment-success-safetypass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentSuccessSafetypassPageRoutingModule
  ],
  declarations: [PaymentSuccessSafetypassPage]
})
export class PaymentSuccessSafetypassPageModule {}
