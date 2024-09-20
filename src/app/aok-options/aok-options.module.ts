import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AokOptionsPageRoutingModule } from './aok-options-routing.module';

import { AokOptionsPage } from './aok-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AokOptionsPageRoutingModule
  ],
  declarations: [AokOptionsPage]
})
export class AokOptionsPageModule {}
