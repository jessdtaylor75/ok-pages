import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEmailGetAppPageRoutingModule } from './user-email-get-app-routing.module';

import { UserEmailGetAppPage } from './user-email-get-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEmailGetAppPageRoutingModule
  ],
  declarations: [UserEmailGetAppPage]
})
export class UserEmailGetAppPageModule {}
