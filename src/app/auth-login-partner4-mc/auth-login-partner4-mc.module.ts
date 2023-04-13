import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthLoginPartner4McPageRoutingModule } from './auth-login-partner4-mc-routing.module';

import { AuthLoginPartner4McPage } from './auth-login-partner4-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthLoginPartner4McPageRoutingModule
  ],
  declarations: [AuthLoginPartner4McPage]
})
export class AuthLoginPartner4McPageModule {}
