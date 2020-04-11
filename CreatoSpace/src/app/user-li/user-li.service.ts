import { Injectable } from '@angular/core';
import { User } from './user-li.model';

@Injectable({
  providedIn: 'root'
})
export class UserLiService {
  user: User[]=[{
    name:"Michael",
    id:"u1",
    imageUrl:"https://s3.scoopwhoop.com/anj/st_anger/289113779.jpg",
    skills:["jango","angular"],
    description:"hello sfakjkkd"

  },
  {
    name:"Mathew",
    id:"u2",
    imageUrl:"https://www.fitcoat.com/wp-content/uploads/1/Single-Breasted-Overcoat.jpg",
    skills:["html","angular"],
    description:"hello sfakjkkd"

  }]
    

  constructor() { }


  getAllUser(){
    return [...this.user];
  }
  getUser(userId:string){
    return {...this.user.find(use=>{
      return use.id===userId;
    })
  }}
}
