import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McPreboardVerify2PageRoutingModule } from './mc-preboard-verify2-routing.module';

import { McPreboardVerify2Page } from './mc-preboard-verify2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McPreboardVerify2PageRoutingModule
  ],
  declarations: [McPreboardVerify2Page]
})
export class McPreboardVerify2PageModule {}
