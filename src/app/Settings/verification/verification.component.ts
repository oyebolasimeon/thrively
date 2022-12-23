import { AuthService } from 'src/app/Service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
      let payload = {userBVN: String, userAccountNumber: String}
      payload.userBVN = this.verifyForm.getRawValue().number;
      // payload = String(payload.number)
      
      // payload.email = this.email;
      payload.userAccountNumber = this.accountID;

      this.service.accountVerification(payload).subscribe((res:any) => {
        this.userVerifiedData = res;
        if(res.status == 200){
          Swal.fire({
            icon: 'success',
            title: 'Valid BVN, Account Verified',
            footer: `${res.message}`
          });
        } 
        else {
          Swal.fire({
            icon: 'error',
            title: 'An Error Ocuured',
            footer: `${res.message}`
          });
        }
        
      })
      
    }
  }

}
