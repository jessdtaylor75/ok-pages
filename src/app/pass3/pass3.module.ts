import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pass3PageRoutingModule } from './pass3-routing.module';

import { Pass3Page } from './pass3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pass3PageRoutingModule
  ],
  declarations: [Pass3Page]
})
export class Pass3PageModule {}
