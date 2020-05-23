import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestStatusPageRoutingModule } from './request-status-routing.module';

import { RequestStatusPage } from './request-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestStatusPageRoutingModule
  ],
  declarations: [RequestStatusPage]
})
export class RequestStatusPageModule {}
