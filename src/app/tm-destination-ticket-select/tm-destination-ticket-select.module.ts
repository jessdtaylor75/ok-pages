import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmDestinationTicketSelectPageRoutingModule } from './tm-destination-ticket-select-routing.module';

import { TmDestinationTicketSelectPage } from './tm-destination-ticket-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmDestinationTicketSelectPageRoutingModule
  ],
  declarations: [TmDestinationTicketSelectPage]
})
export class TmDestinationTicketSelectPageModule {}
