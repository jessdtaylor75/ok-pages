import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyNowIapPageRoutingModule } from './buy-now-iap-routing.module';

import { BuyNowIapPage } from './buy-now-iap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyNowIapPageRoutingModule
  ],
  declarations: [BuyNowIapPage]
})
export class BuyNowIapPageModule {}
