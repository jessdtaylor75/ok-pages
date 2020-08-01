import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppBrowserFirstCheckinPageRoutingModule } from './app-browser-first-checkin-routing.module';

import { AppBrowserFirstCheckinPage } from './app-browser-first-checkin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppBrowserFirstCheckinPageRoutingModule
  ],
  declarations: [AppBrowserFirstCheckinPage]
})
export class AppBrowserFirstCheckinPageModule {}
