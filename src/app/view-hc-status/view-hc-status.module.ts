import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewHcStatusPageRoutingModule } from './view-hc-status-routing.module';

import { ViewHcStatusPage } from './view-hc-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewHcStatusPageRoutingModule
  ],
  declarations: [ViewHcStatusPage]
})
export class ViewHcStatusPageModule {}
