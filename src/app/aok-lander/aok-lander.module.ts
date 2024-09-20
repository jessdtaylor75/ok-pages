import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AokLanderPageRoutingModule } from './aok-lander-routing.module';

import { AokLanderPage } from './aok-lander.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AokLanderPageRoutingModule
  ],
  declarations: [AokLanderPage]
})
export class AokLanderPageModule {}
