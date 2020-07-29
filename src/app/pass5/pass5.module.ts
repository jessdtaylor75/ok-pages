import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pass5PageRoutingModule } from './pass5-routing.module';

import { Pass5Page } from './pass5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pass5PageRoutingModule
  ],
  declarations: [Pass5Page]
})
export class Pass5PageModule {}
