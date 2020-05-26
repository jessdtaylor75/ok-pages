import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jumio1PageRoutingModule } from './jumio1-routing.module';

import { Jumio1Page } from './jumio1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jumio1PageRoutingModule
  ],
  declarations: [Jumio1Page]
})
export class Jumio1PageModule {}
