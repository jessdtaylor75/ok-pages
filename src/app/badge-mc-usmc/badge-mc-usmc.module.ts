import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeMcUsmcPageRoutingModule } from './badge-mc-usmc-routing.module';

import { BadgeMcUsmcPage } from './badge-mc-usmc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeMcUsmcPageRoutingModule
  ],
  declarations: [BadgeMcUsmcPage]
})
export class BadgeMcUsmcPageModule {}
