import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserEasPageRoutingModule } from './browser-eas-routing.module';

import { BrowserEasPage } from './browser-eas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserEasPageRoutingModule
  ],
  declarations: [BrowserEasPage]
})
export class BrowserEasPageModule {}
