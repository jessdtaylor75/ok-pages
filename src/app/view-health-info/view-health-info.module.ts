import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewHealthInfoPageRoutingModule } from './view-health-info-routing.module';

import { ViewHealthInfoPage } from './view-health-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewHealthInfoPageRoutingModule
  ],
  declarations: [ViewHealthInfoPage]
})
export class ViewHealthInfoPageModule {}
