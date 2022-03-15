import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserApLoginPageRoutingModule } from './browser-ap-login-routing.module';

import { BrowserApLoginPage } from './browser-ap-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserApLoginPageRoutingModule
  ],
  declarations: [BrowserApLoginPage]
})
export class BrowserApLoginPageModule {}
