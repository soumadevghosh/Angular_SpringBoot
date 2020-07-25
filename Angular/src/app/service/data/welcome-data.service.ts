import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient 
  ) { }

  executeHelloWorldService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-bean'); // type of response HelloWorldBean
  }

  executeHelloWorldServiceWithParam(name){
    // let basicAuthenticationString=this.createBasicAuthenticationHeader();
    // let headers=new HttpHeaders({
    //   Authorization:basicAuthenticationString
    // })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`); // ,{headers}type of response HelloWorldBean with parameter
  }

  // createBasicAuthenticationHeader(){
  //   let username='souma';
  //   let password='12345';
  //   let basicAuthenticationString='Basic ' + window.btoa(`${username}:${password}`);  //encoded in base 64 
  //   console.log(basicAuthenticationString);
  //   return basicAuthenticationString;
  // }
}
