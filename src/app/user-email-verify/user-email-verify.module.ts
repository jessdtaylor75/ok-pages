import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEmailVerifyPageRoutingModule } from './user-email-verify-routing.module';

import { UserEmailVerifyPage } from './user-email-verify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEmailVerifyPageRoutingModule
  ],
  declarations: [UserEmailVerifyPage]
})
export class UserEmailVerifyPageModule {}
