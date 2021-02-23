import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppEmailApptChoosePageRoutingModule } from './app-email-appt-choose-routing.module';

import { AppEmailApptChoosePage } from './app-email-appt-choose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppEmailApptChoosePageRoutingModule
  ],
  declarations: [AppEmailApptChoosePage]
})
export class AppEmailApptChoosePageModule {}
