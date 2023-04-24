import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McPreboardVerify1PageRoutingModule } from './mc-preboard-verify1-routing.module';

import { McPreboardVerify1Page } from './mc-preboard-verify1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McPreboardVerify1PageRoutingModule
  ],
  declarations: [McPreboardVerify1Page]
})
export class McPreboardVerify1PageModule {}
