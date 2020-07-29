import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassesModalPageRoutingModule } from './passes-modal-routing.module';

import { PassesModalPage } from './passes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassesModalPageRoutingModule
  ],
  declarations: [PassesModalPage]
})
export class PassesModalPageModule {}
