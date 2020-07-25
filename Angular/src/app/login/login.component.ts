import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/Authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='';
  password='';
  message='';
  login=false;

//Dependency injection(passing parameters of constructor)
  constructor(private router:Router,private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  // handleLogin(){
  //   if(this.authService.authenticate(this.username,this.password)==true){   //hardcoded
  //     this.router.navigate(['welcome',this.username])
  //   }
  //   else{
  //     this.message='invalid credentials';
  //   }
  // }
  handleBasicAuthLogin(){
    this.authService.executeAuthenticationService(this.username,this.password).subscribe(
      response=>{
      this.router.navigate(['welcome',this.username]);
    },
    error=>{
      this.message='invalid credentials';
    })
  }

  handleJWTAuthLogin(){
    this.authService.executeJWTAuthenticationService(this.username,this.password).subscribe(
      response=>{
      this.router.navigate(['welcome',this.username]);
    },
    error=>{
      this.message='invalid credentials';
    })
  }
}
