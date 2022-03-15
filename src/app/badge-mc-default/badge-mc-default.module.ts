import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeMcDefaultPageRoutingModule } from './badge-mc-default-routing.module';

import { BadgeMcDefaultPage } from './badge-mc-default.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeMcDefaultPageRoutingModule
  ],
  declarations: [BadgeMcDefaultPage]
})
export class BadgeMcDefaultPageModule {}
