import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-domestic-thrift',
  templateUrl: './domestic-thrift.component.html',
  styleUrls: ['./domestic-thrift.component.css']
})
export class DomesticThriftComponent implements OnInit {

  email: any = localStorage.getItem("email")
  accountID: any = localStorage.getItem("accountID");

  constructor() { }

  ngOnInit(): void {
  }


  createThrift = new FormGroup({
    thriftName: new FormControl(" ", Validators.required),
    description: new FormControl(" ", Validators.required),
    amount: new FormControl(" ", Validators.required),
    numberOfPeople: new FormControl(" ", Validators.required),
    // email: this.email,
    // accountID: this.accountID,
    startDate: new FormControl(" ", Validators.required),
    duration: new FormControl(" ", Validators.required)
  })

  submitThrift(){
    if(this.createThrift.valid){
      const payload = this.createThrift.getRawValue();
      payload.email = this.email;
      payload.accountID = this.accountID

      console.log(payload)
    }
  }


}
