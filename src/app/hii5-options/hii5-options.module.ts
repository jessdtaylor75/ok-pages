import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hii5OptionsPageRoutingModule } from './hii5-options-routing.module';

import { Hii5OptionsPage } from './hii5-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hii5OptionsPageRoutingModule
  ],
  declarations: [Hii5OptionsPage]
})
export class Hii5OptionsPageModule {}
