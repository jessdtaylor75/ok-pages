import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserApDesktopLoginPageRoutingModule } from './browser-ap-desktop-login-routing.module';

import { BrowserApDesktopLoginPage } from './browser-ap-desktop-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserApDesktopLoginPageRoutingModule
  ],
  declarations: [BrowserApDesktopLoginPage]
})
export class BrowserApDesktopLoginPageModule {}
