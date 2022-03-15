import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAppStorePageRoutingModule } from './user-app-store-routing.module';

import { UserAppStorePage } from './user-app-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAppStorePageRoutingModule
  ],
  declarations: [UserAppStorePage]
})
export class UserAppStorePageModule {}
