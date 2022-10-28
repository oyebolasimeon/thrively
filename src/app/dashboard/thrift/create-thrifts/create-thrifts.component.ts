import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thrifts',
  templateUrl: './create-thrifts.component.html',
  styleUrls: ['./create-thrifts.component.css']
})
export class CreateThriftsComponent implements OnInit {

  schedule: string = "Weekly"
  type : any = "Personal"
  // createThrift: any;
  accountID: any = localStorage.getItem("accountID");
  email = localStorage.getItem("email")
  
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createThrift = this.fb.group({
    name: new FormControl(" ", Validators.required),
    account_id: this.accountID,
    contribution: new FormControl(" ", Validators.required),
    description: new FormControl(" ", Validators.required), 
    no_of_people: new FormControl(" ", Validators.required),
    type: new FormControl(" ", Validators.required),
    email: this.email,
    schedule: new FormControl(" ", Validators.required),
    duration: new FormControl(" ", Validators.required)
    
  });

  back(){
    history.back();
  }

  changeThriftType(e: any){
    console.log(e.value)
    this.type = e.value;
    console.log(typeof(this.type))
  }

 

}
