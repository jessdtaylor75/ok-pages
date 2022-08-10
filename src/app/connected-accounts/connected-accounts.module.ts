import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectedAccountsPageRoutingModule } from './connected-accounts-routing.module';

import { ConnectedAccountsPage } from './connected-accounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectedAccountsPageRoutingModule
  ],
  declarations: [ConnectedAccountsPage]
})
export class ConnectedAccountsPageModule {}
