import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateCardSuccessPageRoutingModule } from './activate-card-success-routing.module';

import { ActivateCardSuccessPage } from './activate-card-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateCardSuccessPageRoutingModule
  ],
  declarations: [ActivateCardSuccessPage]
})
export class ActivateCardSuccessPageModule {}
