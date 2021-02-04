import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasGetStartedPageRoutingModule } from './eas-get-started-routing.module';

import { EasGetStartedPage } from './eas-get-started.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasGetStartedPageRoutingModule
  ],
  declarations: [EasGetStartedPage]
})
export class EasGetStartedPageModule {}
