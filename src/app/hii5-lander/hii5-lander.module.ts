import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hii5LanderPageRoutingModule } from './hii5-lander-routing.module';

import { Hii5LanderPage } from './hii5-lander.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hii5LanderPageRoutingModule
  ],
  declarations: [Hii5LanderPage]
})
export class Hii5LanderPageModule {}
