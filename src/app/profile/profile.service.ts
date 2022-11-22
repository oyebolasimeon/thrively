import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  BASE_URL = "https://oyebolasimeon.cloud/thrivelyapi/Api";

  constructor( private http: HttpClient ) { }

  getUserDetails(id: any){
    return this.http.get(`${this.BASE_URL}/fetch_user_details?userAccountNumber=${id}`)
  }

  
}
