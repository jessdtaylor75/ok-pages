import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppBrowserMapPageRoutingModule } from './app-browser-map-routing.module';

import { AppBrowserMapPage } from './app-browser-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppBrowserMapPageRoutingModule
  ],
  declarations: [AppBrowserMapPage]
})
export class AppBrowserMapPageModule {}
