import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAddressListPageRoutingModule } from './view-address-list-routing.module';

import { ViewAddressListPage } from './view-address-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAddressListPageRoutingModule
  ],
  declarations: [ViewAddressListPage]
})
export class ViewAddressListPageModule {}
