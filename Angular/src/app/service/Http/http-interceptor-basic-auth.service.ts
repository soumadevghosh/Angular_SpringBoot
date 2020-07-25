import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from '../Authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {    //whatever request is being sent we'll add an authorization header
    // let username='souma';
    // let password='12345';
    // let basicAuthenticationString='Basic ' + window.btoa(`${username}:${password}`);  //encoded in base 64 
    let username = this.authenticationService.getAuthenticatedUser();
    let basicAuthenticationString = this.authenticationService.getAuthenticatedToken()
    if (username && basicAuthenticationString) {
      request = request.clone({
        setHeaders: { Authorization: basicAuthenticationString }
      })
    }
    return next.handle(request);
  }

}
