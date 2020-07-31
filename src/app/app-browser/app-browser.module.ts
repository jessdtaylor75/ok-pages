import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppBrowserPageRoutingModule } from './app-browser-routing.module';

import { AppBrowserPage } from './app-browser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppBrowserPageRoutingModule
  ],
  declarations: [AppBrowserPage]
})
export class AppBrowserPageModule {}
