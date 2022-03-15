import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeMcNavyPageRoutingModule } from './badge-mc-navy-routing.module';

import { BadgeMcNavyPage } from './badge-mc-navy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeMcNavyPageRoutingModule
  ],
  declarations: [BadgeMcNavyPage]
})
export class BadgeMcNavyPageModule {}
