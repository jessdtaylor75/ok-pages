import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthLoginPartner4PageRoutingModule } from './auth-login-partner4-routing.module';

import { AuthLoginPartner4Page } from './auth-login-partner4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthLoginPartner4PageRoutingModule
  ],
  declarations: [AuthLoginPartner4Page]
})
export class AuthLoginPartner4PageModule {}
