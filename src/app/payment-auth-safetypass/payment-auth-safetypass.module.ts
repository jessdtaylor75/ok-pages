import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentAuthSafetypassPageRoutingModule } from './payment-auth-safetypass-routing.module';

import { PaymentAuthSafetypassPage } from './payment-auth-safetypass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentAuthSafetypassPageRoutingModule
  ],
  declarations: [PaymentAuthSafetypassPage]
})
export class PaymentAuthSafetypassPageModule {}
