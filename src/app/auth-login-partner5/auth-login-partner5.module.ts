import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthLoginPartner5PageRoutingModule } from './auth-login-partner5-routing.module';

import { AuthLoginPartner5Page } from './auth-login-partner5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthLoginPartner5PageRoutingModule
  ],
  declarations: [AuthLoginPartner5Page]
})
export class AuthLoginPartner5PageModule {}
