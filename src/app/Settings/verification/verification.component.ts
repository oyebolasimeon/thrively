import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  email: any = localStorage.getItem("email")
  accountID: any = localStorage.getItem("accountID");
  constructor() { }

  ngOnInit(): void {
  }

  verifyForm = new FormGroup({
    number: new FormControl("", Validators.required)
  })

  initiateVerify(){
    if(this.verifyForm.valid){
      const payload = this.verifyForm.getRawValue();
      payload.email = this.email;
      payload.userAccountNumber = this.accountID;
    }
  }

}
