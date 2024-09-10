import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatListGroupPage } from './chat-list-group.page';

const routes: Routes = [
  {
    path: '',
    component: ChatListGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatListGroupPageRoutingModule {}
