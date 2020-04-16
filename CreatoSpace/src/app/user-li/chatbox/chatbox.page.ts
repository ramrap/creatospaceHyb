import { UserLiService } from './../user-li.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user-li.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.page.html',
  styleUrls: ['./chatbox.page.scss'],
})
export class ChatboxPage implements OnInit {
  //!!!!!!!!!!!!!!!!!!!!!!
  username:string=""
  message:string=""

  //item: Observable<any[]>
  user:User;
  constructor(private activatedroute:ActivatedRoute,
    private router:Router,
  private userService:UserLiService ,
  private db:AngularFirestore) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(paraMap=>{
      console.log(paraMap.has('userid'));
      
      if(!paraMap.has('userid')){
        //this.router.navigate(['./']);
        console.log("ahhaa yha  pe bt he");
        
        return;
      }
      const userId=paraMap.get('userid');

      this.user=this.userService.getUser(userId);
      
    }
    )

  }
  ionViewDidLoad(){
    
   
  }
  sendMessage(){

    const chat={
      message:this.message,
     
    }


     this.db.collection('policies').add(chat).then(function(){
       console.log("updating on firestore");
      
       
     })
     ;
     this.message="";
  
  
      
  };
  

  

}
