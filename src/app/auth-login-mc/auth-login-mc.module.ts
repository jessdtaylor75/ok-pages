import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthLoginMcPageRoutingModule } from './auth-login-mc-routing.module';

import { AuthLoginMcPage } from './auth-login-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthLoginMcPageRoutingModule
  ],
  declarations: [AuthLoginMcPage]
})
export class AuthLoginMcPageModule {}
