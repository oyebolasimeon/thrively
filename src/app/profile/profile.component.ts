import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  greet: any;
  verification: boolean = false
  accountVer: boolean = false;
  validated: boolean = false;
  validStatus: any = localStorage.getItem("validStatus");
  accountID = localStorage.getItem("accountID");
  userData: any;
  role = localStorage.getItem("role")
email = localStorage.getItem("email")
  constructor( private userProfile: ProfileService ) {
    this.validStatus;
   }

  ngOnInit(): void {
    this.greeting();
    this.getUserAccount();
  }

  back(){
    history.back();
  }

  greeting(){
    const day = new Date();
    const hour = day.getHours();

    if(hour >0 && hour <12){
      this.greet = "Morning"
    }
    else if(hour >12 && hour <16){
      this.greet = "Afternoon"
    } else{
      this.greet = "Evening"
    }

    return this.greet
  }


  verifyAccount(){
    if(this.verification == false){
      this.verification = true;
    } else if(this.verification == true) {
      this.verification = false
    }
   
    return this.verification
  }

  verifyAccountInfo(){
    if(this.accountVer == false){
      this.accountVer = true;
    } else if(this.accountVer == true) {
      this.accountVer= false
    }
   
    return this.verification
  }

  verified(){
    
    let status = localStorage.getItem("role")
    return status;
  }

  getUserAccount(){
    let payload = this.accountID
      this.userProfile.getUserDetails(payload).subscribe((res:any) => {
        this.userData = res.result[0]
        
      })
  }


}
