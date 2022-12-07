import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBulider : FormBuilder, private http: HttpClient, private router:Router)
  {

  }
  ngOnInit(): void {
    this.signupForm = this.formBulider.group({
      firstname:[''],
      lastname:[''],
      phone:[''],
      email:[''],
      password:['']
      

    })
  }

  signup(){
    this.http.post<any>("http://localhost:3000/SignupUsers",this.signupForm.value)
    .subscribe(res=> {
      alert("Sign Up success!")
      this.signupForm.reset();
      this.router.navigate(['Login'])
    }, err=>
    alert("Something Went Wrong :("))

  }

}
