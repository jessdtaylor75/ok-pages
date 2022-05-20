import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserBrandedDesktopLoginPageRoutingModule } from './browser-branded-desktop-login-routing.module';

import { BrowserBrandedDesktopLoginPage } from './browser-branded-desktop-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserBrandedDesktopLoginPageRoutingModule
  ],
  declarations: [BrowserBrandedDesktopLoginPage]
})
export class BrowserBrandedDesktopLoginPageModule {}
