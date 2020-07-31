import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppStoreOpenPageRoutingModule } from './app-store-open-routing.module';

import { AppStoreOpenPage } from './app-store-open.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppStoreOpenPageRoutingModule
  ],
  declarations: [AppStoreOpenPage]
})
export class AppStoreOpenPageModule {}
