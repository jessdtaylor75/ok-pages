import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeMcArmyPageRoutingModule } from './badge-mc-army-routing.module';

import { BadgeMcArmyPage } from './badge-mc-army.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeMcArmyPageRoutingModule
  ],
  declarations: [BadgeMcArmyPage]
})
export class BadgeMcArmyPageModule {}
