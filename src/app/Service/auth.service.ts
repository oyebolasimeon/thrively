import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  endpoint = {
    "login": "/user_login",
    "newuser": "/user_onboarding"
  }

  private BASE_URL = "https://stayintouchservices.com/thrivelyapi/Api";
  private LOGIN_URL = this.BASE_URL + this.endpoint.login;

  

  constructor(private http: HttpClient) { 

    
   }

   proceedLogin(userCred: any){
      return this.http.post(this.LOGIN_URL, userCred);
  }
  
  createNewUser(data: any){
    return this.http.post(this.BASE_URL+this.endpoint.newuser, data )
  }
}
