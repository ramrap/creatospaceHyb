import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserLiPageRoutingModule } from './user-li-routing.module';

import { UserLiPage } from './user-li.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserLiPageRoutingModule
  ],
  declarations: [UserLiPage]
})
export class UserLiPageModule {}
