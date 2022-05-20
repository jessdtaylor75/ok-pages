import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserBrandedLoginPageRoutingModule } from './browser-branded-login-routing.module';

import { BrowserBrandedLoginPage } from './browser-branded-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserBrandedLoginPageRoutingModule
  ],
  declarations: [BrowserBrandedLoginPage]
})
export class BrowserBrandedLoginPageModule {}
