import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewId3PageRoutingModule } from './view-id3-routing.module';

import { ViewId3Page } from './view-id3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewId3PageRoutingModule
  ],
  declarations: [ViewId3Page]
})
export class ViewId3PageModule {}
