import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterEmailPageRoutingModule } from './enter-email-routing.module';

import { EnterEmailPage } from './enter-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterEmailPageRoutingModule
  ],
  declarations: [EnterEmailPage]
})
export class EnterEmailPageModule {}
