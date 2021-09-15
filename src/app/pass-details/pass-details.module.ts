import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassDetailsPageRoutingModule } from './pass-details-routing.module';

import { PassDetailsPage } from './pass-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassDetailsPageRoutingModule
  ],
  declarations: [PassDetailsPage]
})
export class PassDetailsPageModule {}
