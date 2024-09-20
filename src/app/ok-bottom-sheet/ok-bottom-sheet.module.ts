import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OkBottomSheetPageRoutingModule } from './ok-bottom-sheet-routing.module';

import { OkBottomSheetPage } from './ok-bottom-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OkBottomSheetPageRoutingModule
  ],
  declarations: [OkBottomSheetPage]
})
export class OkBottomSheetPageModule {}
