import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pass3DetailsPageRoutingModule } from './pass3-details-routing.module';

import { Pass3DetailsPage } from './pass3-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pass3DetailsPageRoutingModule
  ],
  declarations: [Pass3DetailsPage]
})
export class Pass3DetailsPageModule {}
