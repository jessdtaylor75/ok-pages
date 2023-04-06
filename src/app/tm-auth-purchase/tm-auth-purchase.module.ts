import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmAuthPurchasePageRoutingModule } from './tm-auth-purchase-routing.module';

import { TmAuthPurchasePage } from './tm-auth-purchase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmAuthPurchasePageRoutingModule
  ],
  declarations: [TmAuthPurchasePage]
})
export class TmAuthPurchasePageModule {}
