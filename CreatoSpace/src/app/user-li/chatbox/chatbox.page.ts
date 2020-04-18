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


//$$$$$$$******************
//__________________________________________________________________
  //sender Id fill by urself for now ........
  senderId:string=""
  message:string=""
  receiverId:string=''
//__________________________________________________________________
  //item: Observable<any[]>
  messages:Object[]=[];
  user:User;
  s;
  constructor(private activatedroute:ActivatedRoute,
    private router:Router,
  private userService:UserLiService ,
  private db:AngularFireDatabase) { }

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
      this.receiverId=this.user.id;

      this.s = this.db.list('/chat').valueChanges().subscribe( data => {
        this.messages=data;
        
      }
    );
      
      
      
    }
    )

  }
  ionViewDidLoad(){
    
   
  }
  sendMessage(){
    console.log(this.message);
    if(this.message.trim()==""){
      console.log("khali he bhai");
      
      return;
    }
    this.db.list('/chat/').push({
      senderId:this.senderId,
      receiverId:this.receiverId,
      message:this.message.trim(),
    })

     this.message="";

  };
  

  

}
