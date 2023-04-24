import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McPreboardOcrPageRoutingModule } from './mc-preboard-ocr-routing.module';

import { McPreboardOcrPage } from './mc-preboard-ocr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McPreboardOcrPageRoutingModule
  ],
  declarations: [McPreboardOcrPage]
})
export class McPreboardOcrPageModule {}
