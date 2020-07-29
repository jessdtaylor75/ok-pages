import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pass6PageRoutingModule } from './pass6-routing.module';

import { Pass6Page } from './pass6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pass6PageRoutingModule
  ],
  declarations: [Pass6Page]
})
export class Pass6PageModule {}
