import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestSuccessPageRoutingModule } from './test-success-routing.module';

import { TestSuccessPage } from './test-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestSuccessPageRoutingModule
  ],
  declarations: [TestSuccessPage]
})
export class TestSuccessPageModule {}
