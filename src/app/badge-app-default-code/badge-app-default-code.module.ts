import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeAppDefaultCodePageRoutingModule } from './badge-app-default-code-routing.module';

import { BadgeAppDefaultCodePage } from './badge-app-default-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeAppDefaultCodePageRoutingModule
  ],
  declarations: [BadgeAppDefaultCodePage]
})
export class BadgeAppDefaultCodePageModule {}
