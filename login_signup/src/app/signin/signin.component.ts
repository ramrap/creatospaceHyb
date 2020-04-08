import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, Validators, FormGroup, FormControl} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { User } from '../user';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userModel=new User('mustafa', 'chasmai', 'must@g', '1234');
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  user= { username: "", password: ""}
  constructor(private _authService: AuthService){}
  getErrorMessage() {
    if(this.username.hasError('required')){
      return 'You must enter a value';
    }
    return this.password.hasError('required') ? 'You must enter a value' :
        this.password.hasError('minLength(8)') ? 'The password should be of minimum 8 characters' :'';
        
  }
  ngOnInit() {
  }

}

