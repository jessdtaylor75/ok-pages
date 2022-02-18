import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewIdcardListPageRoutingModule } from './view-idcard-list-routing.module';

import { ViewIdcardListPage } from './view-idcard-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewIdcardListPageRoutingModule
  ],
  declarations: [ViewIdcardListPage]
})
export class ViewIdcardListPageModule {}
