import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewIdListPageRoutingModule } from './view-id-list-routing.module';

import { ViewIdListPage } from './view-id-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewIdListPageRoutingModule
  ],
  declarations: [ViewIdListPage]
})
export class ViewIdListPageModule {}
