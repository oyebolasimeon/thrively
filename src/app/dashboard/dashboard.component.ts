import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private service: ProfileService ) { }
  userName: any;
  greet: any;
  barVisible = true;
  ngOnInit(): void {
    this.greeting();
    this.getAccountName();
  }

  getAccountName(){
    let payload = localStorage.getItem("accountID")
    return this.service.getUserDetails(payload).subscribe((data: any) => {
      this.userName =  data.result[0].firstname
    })
  }

  removeBar(){
    this.barVisible = false;
  }

  greeting(){
    const day = new Date();
    const hour = day.getHours();

    if(hour >0 && hour <12){
      this.greet = "Morning"
    }
    else if(hour >12 && hour <15){
      this.greet = "Afternoon"
    } else{
      this.greet = "Evening"
    }

    return this.greet
  }

}
