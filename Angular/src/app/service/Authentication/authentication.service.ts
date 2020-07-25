import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { API_URL } from 'src/app/app.constants';

export const TOKEN='Token';
export const AUTHENTICATED_USER='authenticateUser';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  // authenticate(username, password) {
  //   if (username === "souma" && password === '123456') {
  //     // this.router.navigate(['welcome',username]);    //navigating to Welcome page after successful login 
  //     sessionStorage.setItem('authenticateUser', username);
  //     return true;
  //   }
  //   return false;
  // }

  executeJWTAuthenticationService(username, password) {
    
    return this.http.post<any>(`${API_URL}/authenticate`,{username,password})
      .pipe(    //if request succeeds then save the username to session storage
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          })
      ); //if successfull then map we have to return the data because it is being subscribed by others
  }

  executeAuthenticationService(username, password) {
    let basicAuthenticationString = 'Basic ' + window.btoa(`${username}:${password}`);
    let headers = new HttpHeaders({
      Authorization: basicAuthenticationString
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
      { headers }).pipe(    //if request succeeds then save the username to session storage
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthenticationString);
            return data;
          })
      ); //if successfull then map we have to return the data because it is being subscribed by others
  }
  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
  }



  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
export class AuthenticationBean {
  constructor(public message: string) { }
}
