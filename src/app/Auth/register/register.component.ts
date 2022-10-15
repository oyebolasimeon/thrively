import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

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
    address: new FormControl(" ", Validators.required),
    country: new FormControl(" ", Validators.required),
    password: new FormControl(" ", Validators.required)

  })


  signUp(){
    if(this.Register.valid){
      const payload = this.Register.getRawValue();
      console.log(payload)
      // this.Services.createNewUser()
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
  

}
