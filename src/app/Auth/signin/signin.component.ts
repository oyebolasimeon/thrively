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
  load = false;
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
    this.load = true;
    if(this.Login.valid){
      this.service.proceedLogin(this.Login.value).subscribe((res: any) => {
        
        if(res.result.length !== 0){
          this.responseData = res;
          localStorage.setItem("accountID", this.responseData.result[0].account_no);
          localStorage.setItem("email", this.responseData.result[0].email);
          if (this.responseData.result[0].status == 1){
            localStorage.setItem("role", "General User");
          }
          Swal.fire('Access Granted', 'success')
          this.route.navigate(['/myboard'])
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Incorrect Credentials',
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
