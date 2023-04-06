import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmBadgeTicketPageRoutingModule } from './tm-badge-ticket-routing.module';

import { TmBadgeTicketPage } from './tm-badge-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmBadgeTicketPageRoutingModule
  ],
  declarations: [TmBadgeTicketPage]
})
export class TmBadgeTicketPageModule {}
