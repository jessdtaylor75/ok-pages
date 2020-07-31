import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppBrowserSpnetPageRoutingModule } from './app-browser-spnet-routing.module';

import { AppBrowserSpnetPage } from './app-browser-spnet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppBrowserSpnetPageRoutingModule
  ],
  declarations: [AppBrowserSpnetPage]
})
export class AppBrowserSpnetPageModule {}
