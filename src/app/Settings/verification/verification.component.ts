import { AuthService } from 'src/app/Service/auth.service';
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
  userVerifiedData: any;
  constructor( private service: AuthService) { }

  ngOnInit(): void {
  }

  verifyForm = new FormGroup({
    number: new FormControl("", Validators.required)
  })

  initiateVerify(){
    if(this.verifyForm.valid){
      let payload = this.verifyForm.getRawValue();
      payload = String(payload.number)
      console.log("Payload ",payload );
      
      // payload.email = this.email;
      // payload.userAccountNumber = this.accountID;
      // this.service.accountVerification(payload).subscribe((res:any) => {
      //   this.userVerifiedData = res;
      // })
      
    }
  }

}
