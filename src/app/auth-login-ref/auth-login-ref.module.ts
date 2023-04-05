import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthLoginRefPageRoutingModule } from './auth-login-ref-routing.module';

import { AuthLoginRefPage } from './auth-login-ref.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthLoginRefPageRoutingModule
  ],
  declarations: [AuthLoginRefPage]
})
export class AuthLoginRefPageModule {}
