import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEmailInboxPageRoutingModule } from './user-email-inbox-routing.module';

import { UserEmailInboxPage } from './user-email-inbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEmailInboxPageRoutingModule
  ],
  declarations: [UserEmailInboxPage]
})
export class UserEmailInboxPageModule {}
