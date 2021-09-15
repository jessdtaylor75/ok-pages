import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pass2DetailsPageRoutingModule } from './pass2-details-routing.module';

import { Pass2DetailsPage } from './pass2-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pass2DetailsPageRoutingModule
  ],
  declarations: [Pass2DetailsPage]
})
export class Pass2DetailsPageModule {}
