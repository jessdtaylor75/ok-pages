import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewIdPageRoutingModule } from './view-id-routing.module';

import { ViewIdPage } from './view-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewIdPageRoutingModule
  ],
  declarations: [ViewIdPage]
})
export class ViewIdPageModule {}
