import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/Authentication/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public authService:AuthenticationService) { }

  ngOnInit(): void {
    this.authService.logout();
  }

}
