import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = '';
  password = '';
  responseData: any;
  constructor(
    private route: Router,
    private service: AuthService,
    private notification: ToastrService
  ) { }

  ngOnInit(): void {
  }

  Login = new FormGroup({
    email: new FormControl(" ", Validators.required),
    password: new FormControl(" ", Validators.required)
  })

  ProceedLogin(){
    if(this.Login.valid){
      this.service.proceedLogin(this.Login.value).subscribe((res: any) => {
        
        if(res.result.length !== 0){
          this.responseData = res;
          localStorage.setItem("accountID", this.responseData.result[0].account_no);
          localStorage.setItem("email", this.responseData.result[0].email);
          Swal.fire('Access Granted', 'success')
          this.route.navigate(['/myboard'])
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Incorrect Credentials',
            footer: ''
          });
        }
      }), (error: { message: string | undefined; }) => {
        this.notification.error(error.message)
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
