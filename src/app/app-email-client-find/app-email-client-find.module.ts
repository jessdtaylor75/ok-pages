import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppEmailClientFindPageRoutingModule } from './app-email-client-find-routing.module';

import { AppEmailClientFindPage } from './app-email-client-find.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppEmailClientFindPageRoutingModule
  ],
  declarations: [AppEmailClientFindPage]
})
export class AppEmailClientFindPageModule {}
