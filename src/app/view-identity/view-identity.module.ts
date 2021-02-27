import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewIdentityPageRoutingModule } from './view-identity-routing.module';

import { ViewIdentityPage } from './view-identity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewIdentityPageRoutingModule
  ],
  declarations: [ViewIdentityPage]
})
export class ViewIdentityPageModule {}
