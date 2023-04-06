import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmSuccessPageRoutingModule } from './tm-success-routing.module';

import { TmSuccessPage } from './tm-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmSuccessPageRoutingModule
  ],
  declarations: [TmSuccessPage]
})
export class TmSuccessPageModule {}
