import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  greet: any;
  verification: boolean = false
  constructor() { }

  ngOnInit(): void {
    this.greeting();
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
    else if(hour >12 && hour <15){
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

  verification(){
    
  }


}
