import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeMcUscgPageRoutingModule } from './badge-mc-uscg-routing.module';

import { BadgeMcUscgPage } from './badge-mc-uscg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeMcUscgPageRoutingModule
  ],
  declarations: [BadgeMcUscgPage]
})
export class BadgeMcUscgPageModule {}
