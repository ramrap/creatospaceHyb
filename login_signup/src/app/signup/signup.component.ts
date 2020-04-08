import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, Validators, FormGroup, FormControl} from '@angular/forms';
import { NgModel } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required, Validators.email])
  confirm = new FormControl('', [Validators.required]);
  phno = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : this.password.hasError('minLength(8)') ? 'The password should be of minimum 8 characters' :'';
    return this.confirm.hasError('required') ? 'You must enter a value' : this.confirm.hasError('minLength(8)') ? 'The password should be of minimum 8 characters' :'';
    return this.firstName.hasError('required') ? 'You must enter a value' : '';
    return this.lastName.hasError('required') ? 'You must enter a value' : '';
    return this.phno.hasError('required') ? 'You must enter a value' : this.username.hasError('number') ? 'invalid phone number' : '';
    return this.username.hasError('required') ? 'You must enter a value' : '';
  }  


  ngOnInit() {
  }




}



