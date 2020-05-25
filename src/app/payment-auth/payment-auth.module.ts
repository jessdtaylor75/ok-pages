import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentAuthPageRoutingModule } from './payment-auth-routing.module';

import { PaymentAuthPage } from './payment-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentAuthPageRoutingModule
  ],
  declarations: [PaymentAuthPage]
})
export class PaymentAuthPageModule {}
