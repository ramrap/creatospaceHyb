import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, Validators, FormGroup, FormControl} from '@angular/forms';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-signin-next',
  templateUrl: './signin-next.component.html',
  styleUrls: ['./signin-next.component.css']
})
export class SigninNextComponent implements OnInit {

  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' :
        this.password.hasError('minLength(8)') ? 'The password should be of minimum 8 characters' :'';
  }

  ngOnInit() { 
  }


}

