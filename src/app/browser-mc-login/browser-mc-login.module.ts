import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserMcLoginPageRoutingModule } from './browser-mc-login-routing.module';

import { BrowserMcLoginPage } from './browser-mc-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserMcLoginPageRoutingModule
  ],
  declarations: [BrowserMcLoginPage]
})
export class BrowserMcLoginPageModule {}
