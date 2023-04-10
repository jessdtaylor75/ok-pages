import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthLoginBrandPageRoutingModule } from './auth-login-brand-routing.module';

import { AuthLoginBrandPage } from './auth-login-brand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthLoginBrandPageRoutingModule
  ],
  declarations: [AuthLoginBrandPage]
})
export class AuthLoginBrandPageModule {}
