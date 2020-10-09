import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewHcAlertsPageRoutingModule } from './view-hc-alerts-routing.module';

import { ViewHcAlertsPage } from './view-hc-alerts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewHcAlertsPageRoutingModule
  ],
  declarations: [ViewHcAlertsPage]
})
export class ViewHcAlertsPageModule {}
