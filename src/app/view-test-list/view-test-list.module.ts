import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTestListPageRoutingModule } from './view-test-list-routing.module';

import { ViewTestListPage } from './view-test-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTestListPageRoutingModule
  ],
  declarations: [ViewTestListPage]
})
export class ViewTestListPageModule {}
