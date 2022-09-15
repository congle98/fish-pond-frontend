import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {AlertService} from "./alert.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginStatusSubject = new BehaviorSubject<boolean>(false);
  baseUrl = environment.baseUrl;
  constructor(private router:Router,private httpClient:HttpClient, private alertService:AlertService) { }


  logOut(){
    this.loginStatusSubject.next(false);
    localStorage.clear();
    this.router.navigate(['/dang-nhap']);
  }

  loginRequest(loginRequest:any){
    return this.httpClient.post(this.baseUrl+"/auth/login",loginRequest);
  }

  loginSuccess(loginResponse:any){
    localStorage.setItem("user",JSON.stringify(loginResponse.user));
    localStorage.setItem("token",JSON.stringify(loginResponse.token));
    this.alertService.alertSuccess("Đăng nhập thành công!");
    this.router.navigateByUrl("/quan-ly");
    this.loginStatusSubject.next(true);

  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    this.loginStatusSubject.next(false);
    localStorage.clear();
  }

  getUser(){
    let user = localStorage.getItem('user');
    return user !== null ? JSON.parse(user) : null;
  }

  isLoggedIn(){
    let user = localStorage.getItem('user');
    if(!user){
      return false
    }
    else{
      return true;
    }
  }


}
