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
