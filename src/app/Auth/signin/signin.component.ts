import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



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
    private service: AuthService
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
        
        if(res != null){
          this.responseData = res;
          console.log(this.responseData)
          this.route.navigate(['/myboard'])
        } else {
          console.log("Response is empty")
        }
      })
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
