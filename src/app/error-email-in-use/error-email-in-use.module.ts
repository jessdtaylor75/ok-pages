import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorEmailInUsePageRoutingModule } from './error-email-in-use-routing.module';

import { ErrorEmailInUsePage } from './error-email-in-use.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorEmailInUsePageRoutingModule
  ],
  declarations: [ErrorEmailInUsePage]
})
export class ErrorEmailInUsePageModule {}
