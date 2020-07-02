import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAuthSafetypassPageRoutingModule } from './login-auth-safetypass-routing.module';

import { LoginAuthSafetypassPage } from './login-auth-safetypass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAuthSafetypassPageRoutingModule
  ],
  declarations: [LoginAuthSafetypassPage]
})
export class LoginAuthSafetypassPageModule {}
