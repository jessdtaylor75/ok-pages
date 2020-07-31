import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppStorePageRoutingModule } from './app-store-routing.module';

import { AppStorePage } from './app-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppStorePageRoutingModule
  ],
  declarations: [AppStorePage]
})
export class AppStorePageModule {}
