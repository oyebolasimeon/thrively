import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  endpoint = {
    "login": "/user_login",
    "newuser": "/user_onboarding",
    "verify": "/email_verification",
    "join": "/join_thrift",
    
  }

  private BASE_URL = environment.baseUrl;
  private LOGIN_URL = this.BASE_URL + this.endpoint.login;

  

  constructor(private http: HttpClient) { 

    
   }

   isLoggedIn(){
    return localStorage.getItem("email") != null;
   }

   proceedLogin(userCred: any){
      return this.http.post(this.LOGIN_URL, userCred);
  }

  getCountries(){
    const link = "https://countriesnow.space/api/v0.1/countries";
    return this.http.get(link);
  }

  joinThrift(id:any){
    return this.http.post(this.BASE_URL+this.endpoint.join, id )
  }
  
  createNewUser(data: any){
    return this.http.post(this.BASE_URL+this.endpoint.newuser, data )
  }

  otpVerification(data: any){
    return this.http.post(this.BASE_URL+this.endpoint.verify, data);
  }

  getThriftByID(id:any){
    return this.http.get(`${this.BASE_URL}/fetch_thrift_details?thriftID=${id}`)
  }

  getNotification(account: any){
    return this.http.get(`${this.BASE_URL}/userActivityLog?accountID=${account}`)
  }


}
