import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pass1PageRoutingModule } from './pass1-routing.module';

import { Pass1Page } from './pass1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pass1PageRoutingModule
  ],
  declarations: [Pass1Page]
})
export class Pass1PageModule {}
