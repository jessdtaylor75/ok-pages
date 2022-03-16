import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutMcPageRoutingModule } from './about-mc-routing.module';

import { AboutMcPage } from './about-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutMcPageRoutingModule
  ],
  declarations: [AboutMcPage]
})
export class AboutMcPageModule {}
