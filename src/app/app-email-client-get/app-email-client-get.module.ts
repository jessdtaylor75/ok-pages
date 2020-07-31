import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppEmailClientGetPageRoutingModule } from './app-email-client-get-routing.module';

import { AppEmailClientGetPage } from './app-email-client-get.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppEmailClientGetPageRoutingModule
  ],
  declarations: [AppEmailClientGetPage]
})
export class AppEmailClientGetPageModule {}
