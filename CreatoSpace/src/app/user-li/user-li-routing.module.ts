import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLiPage } from './user-li.page';

const routes: Routes = [
  {
    path: '',
    component: UserLiPage
  },
  {
    path: ':userid',
    loadChildren: () => import('./chatbox/chatbox.module').then( m => m.ChatboxPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLiPageRoutingModule {}
