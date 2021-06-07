import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateCardPageRoutingModule } from './activate-card-routing.module';

import { ActivateCardPage } from './activate-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateCardPageRoutingModule
  ],
  declarations: [ActivateCardPage]
})
export class ActivateCardPageModule {}
