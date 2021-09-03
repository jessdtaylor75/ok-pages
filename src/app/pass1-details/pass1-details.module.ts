import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pass1DetailsPageRoutingModule } from './pass1-details-routing.module';

import { Pass1DetailsPage } from './pass1-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pass1DetailsPageRoutingModule
  ],
  declarations: [Pass1DetailsPage]
})
export class Pass1DetailsPageModule {}
