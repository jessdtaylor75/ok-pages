import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTestDetailsPageRoutingModule } from './view-test-details-routing.module';

import { ViewTestDetailsPage } from './view-test-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTestDetailsPageRoutingModule
  ],
  declarations: [ViewTestDetailsPage]
})
export class ViewTestDetailsPageModule {}
