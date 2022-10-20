import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  country: any;
  signpage: any;
  page1: boolean = true;
  page2: boolean = false;
  lastPage: boolean = false;
  load = false;

  constructor(private route: Router, private Services: AuthService) { }

  ngOnInit(): void {
    this.getAllCountry();
  }

  Register = new FormGroup({
    firstname: new FormControl(" ", Validators.required),
    lastname: new FormControl(" ", Validators.required),
    phonenumber: new FormControl(" ", Validators.required),
    email: new FormControl(" ", Validators.email),
    othername: new FormControl(""),
    mothername: new FormControl(""),
    gender: new FormControl(""),
    date_of_birth: new FormControl(" ", Validators.required),
    zipcode: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl(""),
    user_image: new FormControl(""),
    address: new FormControl(" ", Validators.required),
    country: new FormControl(" ", Validators.required),
    password: new FormControl(" ", Validators.required)

  })


  signUp(){
    if(this.Register.valid){
      const payload = this.Register.getRawValue();
      console.log(payload)
      this.Services.createNewUser(payload).subscribe((res:any) => {
        console.log(res)
        this.otp()
      })
    }

  }

  nextPage(page: number){
   if(page == 1){
    this.page1 = true;
    this.page2 = false;
    this.lastPage = false;
   } else if(page == 2){
    this.page1 = false;
    this.page2 = true;
    this.lastPage = false;
   } else if(page == 3){
    this.page1 = false;
    this.page2 = false;
    this.lastPage = true;
   }
  }

  getAllCountry(){
    this.Services.getCountries().subscribe((res: any) => {
      this.country = res.data;
    })
  }

  back(){
    history.back()
  }

  navigateUser(){
    this.route.navigate(['/myboard'])
  }
  navigatenewUser(){
    this.route.navigate(['/login'])
  }

  otp(){
    Swal.fire({
      title: 'Paste OTP here',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: false,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        this.load = true;
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'OTP Confirmed, Accout Created Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
  

}
