import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThriftService {
  endpoint = {
    "personal": "/createPersonalThrift",
    "fetch": "/user_onboarding", 
    "verify": "/email_verification",
    "join": "/join_thrift",
  }

  private BASE_URL = "https://oyebolasimeon.cloud/thrivelyapi/Api";
  constructor(private http: HttpClient) { }

  personalThrift(data: any){
    return this.http.post(this.BASE_URL+this.endpoint.personal, data)
  }

  fetchAllThrift(accNo: any){
    return this.http.get(`${this.BASE_URL}/listUserThrift?userAccountNumber=${accNo}`)
  }
}
