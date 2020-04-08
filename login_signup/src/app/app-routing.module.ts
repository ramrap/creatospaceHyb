import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent } from './signin/signin.component'
import {SignupComponent } from './signup/signup.component'
import {HomeComponent } from './home/home.component'
import { SigninNextComponent} from './signin-next/signin-next.component'


const routes: Routes = [
  { path: "", component: SigninComponent},
  { path: "signup", component: SignupComponent},
  { path: "signin", component: SigninComponent},
  { path: "signin-next", component: SigninNextComponent},
  { path: "home", component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
