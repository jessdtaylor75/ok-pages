import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pass4PageRoutingModule } from './pass4-routing.module';

import { Pass4Page } from './pass4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pass4PageRoutingModule
  ],
  declarations: [Pass4Page]
})
export class Pass4PageModule {}
