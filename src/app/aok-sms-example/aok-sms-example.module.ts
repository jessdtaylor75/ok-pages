import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AokSmsExamplePageRoutingModule } from './aok-sms-example-routing.module';

import { AokSmsExamplePage } from './aok-sms-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AokSmsExamplePageRoutingModule
  ],
  declarations: [AokSmsExamplePage]
})
export class AokSmsExamplePageModule {}
