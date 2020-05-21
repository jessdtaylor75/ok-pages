import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBankPageRoutingModule } from './view-bank-routing.module';

import { ViewBankPage } from './view-bank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBankPageRoutingModule
  ],
  declarations: [ViewBankPage]
})
export class ViewBankPageModule {}
