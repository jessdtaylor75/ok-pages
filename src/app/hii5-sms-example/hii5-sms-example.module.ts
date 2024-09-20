import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hii5SmsExamplePageRoutingModule } from './hii5-sms-example-routing.module';

import { Hii5SmsExamplePage } from './hii5-sms-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hii5SmsExamplePageRoutingModule
  ],
  declarations: [Hii5SmsExamplePage]
})
export class Hii5SmsExamplePageModule {}
