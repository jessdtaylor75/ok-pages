import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderTestPageRoutingModule } from './order-test-routing.module';

import { OrderTestPage } from './order-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderTestPageRoutingModule
  ],
  declarations: [OrderTestPage]
})
export class OrderTestPageModule {}
