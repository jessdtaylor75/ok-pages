import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthLoginPartner5McPageRoutingModule } from './auth-login-partner5-mc-routing.module';

import { AuthLoginPartner5McPage } from './auth-login-partner5-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthLoginPartner5McPageRoutingModule
  ],
  declarations: [AuthLoginPartner5McPage]
})
export class AuthLoginPartner5McPageModule {}
