import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string="";
  password:string="";

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  
  login(){
    this.router.navigateByUrl('/principal');
  }

}
