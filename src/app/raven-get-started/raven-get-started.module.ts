import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RavenGetStartedPageRoutingModule } from './raven-get-started-routing.module';

import { RavenGetStartedPage } from './raven-get-started.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RavenGetStartedPageRoutingModule
  ],
  declarations: [RavenGetStartedPage]
})
export class RavenGetStartedPageModule {}
