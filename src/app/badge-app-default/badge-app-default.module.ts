import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeAppDefaultPageRoutingModule } from './badge-app-default-routing.module';

import { BadgeAppDefaultPage } from './badge-app-default.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeAppDefaultPageRoutingModule
  ],
  declarations: [BadgeAppDefaultPage]
})
export class BadgeAppDefaultPageModule {}
