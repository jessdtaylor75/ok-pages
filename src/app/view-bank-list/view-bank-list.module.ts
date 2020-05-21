import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBankListPageRoutingModule } from './view-bank-list-routing.module';

import { ViewBankListPage } from './view-bank-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBankListPageRoutingModule
  ],
  declarations: [ViewBankListPage]
})
export class ViewBankListPageModule {}
