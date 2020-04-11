import { UserLiService } from './../user-li.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user-li.model';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.page.html',
  styleUrls: ['./chatbox.page.scss'],
})
export class ChatboxPage implements OnInit {
  
  user:User;
  constructor(private activatedroute:ActivatedRoute,
    private router:Router,
  private userService:UserLiService) { }

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

}
