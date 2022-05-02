import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletePaymentPageRoutingModule } from './delete-payment-routing.module';

import { DeletePaymentPage } from './delete-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletePaymentPageRoutingModule
  ],
  declarations: [DeletePaymentPage]
})
export class DeletePaymentPageModule {}
