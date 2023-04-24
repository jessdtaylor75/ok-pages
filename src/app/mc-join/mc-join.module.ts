import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McJoinPageRoutingModule } from './mc-join-routing.module';

import { McJoinPage } from './mc-join.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McJoinPageRoutingModule
  ],
  declarations: [McJoinPage]
})
export class McJoinPageModule {}
