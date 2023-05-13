import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEmailVerifyPartner1PageRoutingModule } from './user-email-verify-partner1-routing.module';

import { UserEmailVerifyPartner1Page } from './user-email-verify-partner1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEmailVerifyPartner1PageRoutingModule
  ],
  declarations: [UserEmailVerifyPartner1Page]
})
export class UserEmailVerifyPartner1PageModule {}
