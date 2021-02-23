import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppEmailApptConfirmPageRoutingModule } from './app-email-appt-confirm-routing.module';

import { AppEmailApptConfirmPage } from './app-email-appt-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppEmailApptConfirmPageRoutingModule
  ],
  declarations: [AppEmailApptConfirmPage]
})
export class AppEmailApptConfirmPageModule {}
