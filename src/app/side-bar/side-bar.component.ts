import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  accountID = localStorage.getItem("accountID");
  validStatus: any = localStorage.getItem("validStatus");
  userData: any;
  greet: any;
  role = localStorage.getItem("role")
  constructor( private userProfile: ProfileService ) {
    this.validStatus;
   }


  ngOnInit(): void {
    this.greeting();
    this.getUserAccount();
  }


  getUserAccount(){
    let payload = this.accountID
      this.userProfile.getUserDetails(payload).subscribe((res:any) => {
        this.userData = res.result[0]
        
      })
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
