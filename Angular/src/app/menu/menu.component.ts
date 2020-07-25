import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/Authentication/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn=false;
  constructor(public authService:AuthenticationService) { }

  ngOnInit(): void {
    // this.isUserLoggedIn=  this.authService.isUserLoggedIn(); //will not work properly bcoz it is called on page load only 
  }

 
}

