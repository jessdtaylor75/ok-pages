import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessAccountCreatedPageRoutingModule } from './success-account-created-routing.module';

import { SuccessAccountCreatedPage } from './success-account-created.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessAccountCreatedPageRoutingModule
  ],
  declarations: [SuccessAccountCreatedPage]
})
export class SuccessAccountCreatedPageModule {}
