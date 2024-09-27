import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyIdSelfiePageRoutingModule } from './verify-id-selfie-routing.module';

import { VerifyIdSelfiePage } from './verify-id-selfie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyIdSelfiePageRoutingModule
  ],
  declarations: [VerifyIdSelfiePage]
})
export class VerifyIdSelfiePageModule {}
