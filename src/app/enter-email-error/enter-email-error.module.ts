import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterEmailErrorPageRoutingModule } from './enter-email-error-routing.module';

import { EnterEmailErrorPage } from './enter-email-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterEmailErrorPageRoutingModule
  ],
  declarations: [EnterEmailErrorPage]
})
export class EnterEmailErrorPageModule {}
