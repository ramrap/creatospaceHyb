import { UserLiService } from './user-li.service';
//import { UserlistService } from './../home/userlist.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user-li.model';

@Component({
  selector: 'app-user-li',
  templateUrl: './user-li.page.html',
  styleUrls: ['./user-li.page.scss'],
})
export class UserLiPage implements OnInit {
  users:User[];
  constructor(private userList:UserLiService) { }

  ngOnInit() {
    this.users=this.userList.getAllUser();
    console.log("hello Wold");
    
  }

}
