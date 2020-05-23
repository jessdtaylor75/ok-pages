import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEmployerListPageRoutingModule } from './view-employer-list-routing.module';

import { ViewEmployerListPage } from './view-employer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEmployerListPageRoutingModule
  ],
  declarations: [ViewEmployerListPage]
})
export class ViewEmployerListPageModule {}
