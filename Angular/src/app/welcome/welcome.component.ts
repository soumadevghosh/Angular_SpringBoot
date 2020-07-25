import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message:string='Welcome to welcome';
  name='';
  welcomeMessage:string;
  //ActivatedRoute
  constructor(private route:ActivatedRoute, private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
    console.log(this.name);
    
  }
  getWelcomeMessage(){
    console.log();
    this.service.executeHelloWorldService().subscribe(
      res=> this.welcomeMessage=res.message,
      error=> this.welcomeMessage=error.error.message
    );
   
  }
  getWelcomeMessageWithParam(){
    console.log();
    this.service.executeHelloWorldServiceWithParam("Souma").subscribe(
      res=> this.welcomeMessage=res.message,
      error=> this.welcomeMessage=error.error.message
    );
   
  }
}
