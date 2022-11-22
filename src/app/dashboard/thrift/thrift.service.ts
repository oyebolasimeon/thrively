import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThriftService {
  endpoint = {
    "personal": "/createPersonalThrift",
    "newuser": "/user_onboarding",
    "verify": "/email_verification",
    "join": "/join_thrift",
  }

  private BASE_URL = "https://oyebolasimeon.cloud/thrivelyapi/Api";
  constructor(private http: HttpClient) { }
}
