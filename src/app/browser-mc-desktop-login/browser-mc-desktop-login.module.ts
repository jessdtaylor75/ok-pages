import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserMcDesktopLoginPageRoutingModule } from './browser-mc-desktop-login-routing.module';

import { BrowserMcDesktopLoginPage } from './browser-mc-desktop-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserMcDesktopLoginPageRoutingModule
  ],
  declarations: [BrowserMcDesktopLoginPage]
})
export class BrowserMcDesktopLoginPageModule {}
