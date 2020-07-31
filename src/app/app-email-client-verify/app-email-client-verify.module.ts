import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppEmailClientVerifyPageRoutingModule } from './app-email-client-verify-routing.module';

import { AppEmailClientVerifyPage } from './app-email-client-verify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppEmailClientVerifyPageRoutingModule
  ],
  declarations: [AppEmailClientVerifyPage]
})
export class AppEmailClientVerifyPageModule {}
