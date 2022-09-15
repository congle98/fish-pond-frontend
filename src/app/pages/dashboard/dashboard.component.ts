import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import '/src/assets/js/app';
import '/src/assets/js/google';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','../../../assets/style/dashBoardStyle.css']
})
export class DashboardComponent implements OnInit {
  user:any;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    console.log(this.user.fullName);
  }

  logOut(){
    this.authService.logOut();
  }

}
