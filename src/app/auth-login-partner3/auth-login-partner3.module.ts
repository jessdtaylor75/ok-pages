import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthLoginPartner3PageRoutingModule } from './auth-login-partner3-routing.module';

import { AuthLoginPartner3Page } from './auth-login-partner3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthLoginPartner3PageRoutingModule
  ],
  declarations: [AuthLoginPartner3Page]
})
export class AuthLoginPartner3PageModule {}
