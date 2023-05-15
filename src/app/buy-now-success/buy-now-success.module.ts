import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyNowSuccessPageRoutingModule } from './buy-now-success-routing.module';

import { BuyNowSuccessPage } from './buy-now-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyNowSuccessPageRoutingModule
  ],
  declarations: [BuyNowSuccessPage]
})
export class BuyNowSuccessPageModule {}
