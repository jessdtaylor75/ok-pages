import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeMcUsafPageRoutingModule } from './badge-mc-usaf-routing.module';

import { BadgeMcUsafPage } from './badge-mc-usaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeMcUsafPageRoutingModule
  ],
  declarations: [BadgeMcUsafPage]
})
export class BadgeMcUsafPageModule {}
