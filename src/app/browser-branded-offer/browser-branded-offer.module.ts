import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserBrandedOfferPageRoutingModule } from './browser-branded-offer-routing.module';

import { BrowserBrandedOfferPage } from './browser-branded-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserBrandedOfferPageRoutingModule
  ],
  declarations: [BrowserBrandedOfferPage]
})
export class BrowserBrandedOfferPageModule {}
