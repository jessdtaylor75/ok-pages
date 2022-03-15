import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessLoginPageRoutingModule } from './success-login-routing.module';

import { SuccessLoginPage } from './success-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessLoginPageRoutingModule
  ],
  declarations: [SuccessLoginPage]
})
export class SuccessLoginPageModule {}
