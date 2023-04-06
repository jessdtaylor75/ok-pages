import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmBrowserEasPageRoutingModule } from './tm-browser-eas-routing.module';

import { TmBrowserEasPage } from './tm-browser-eas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmBrowserEasPageRoutingModule
  ],
  declarations: [TmBrowserEasPage]
})
export class TmBrowserEasPageModule {}
