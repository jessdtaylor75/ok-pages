import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeMcDefaultCodePageRoutingModule } from './badge-mc-default-code-routing.module';

import { BadgeMcDefaultCodePage } from './badge-mc-default-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeMcDefaultCodePageRoutingModule
  ],
  declarations: [BadgeMcDefaultCodePage]
})
export class BadgeMcDefaultCodePageModule {}
