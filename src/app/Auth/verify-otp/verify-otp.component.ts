import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/Service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {
  otpkey = '';
  responseData: any;
  load = false;
  constructor(
    private route: Router,
    private service: AuthService,
    private notification: ToastrService
  ) { }

  ngOnInit(): void {
  }

  Verify = new FormGroup({
    otpkey: new FormControl("", Validators.required)
  })

  ProceedOtp(){
    this.load = true;
    if(this.Verify.valid){
      this.service.otpVerification(this.Verify.value).subscribe((res: any) => {
        console.log(res)
        if(res.status == 200){
          this.responseData = res;
         
          Swal.fire('OTP Verified', 'success')
          this.route.navigate(['/login'])
        } 
        else if(res.status == 204){
          Swal.fire({
            icon: 'warning',
            title: 'OTP Expired or Used',
            footer: ''
          });
          this.route.navigate(['/login'])
        } 
        else {
          Swal.fire({
            icon: 'error',
            title: 'Invalid OTP',
            footer: ''
          });
          this.load = false;
        }
      }), (error: { message: string | undefined; }) => {
        this.notification.error(error.message)
        this.load = false;
      }
    }

  }

  back(){
    history.back()
  }

  navigateUser(){
    this.route.navigate(['/myboard'])
  }
  navigatenewUser(){
    this.route.navigate(['/signup'])
  }

}
