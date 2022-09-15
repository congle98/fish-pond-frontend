import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AlertService} from "../../services/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private alertService:AlertService,
    private router:Router
  ) { }

  loginForm:FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:[""],
      passWord:[""]
    });
  }

  onSubmit(){
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    let userName = this.loginForm.controls["userName"].value;
    let passWord = this.loginForm.controls["passWord"].value;
    let loginRequest = {
      userName,
      passWord
    }
    this.authService.loginRequest(loginRequest).subscribe(
      {
        next:(s)=>{
          this.authService.loginSuccess(s);
          this.loginForm.reset();},
        error:(e)=>{
          this.alertService.alertWarning(e.error);}
      });
  }


}
