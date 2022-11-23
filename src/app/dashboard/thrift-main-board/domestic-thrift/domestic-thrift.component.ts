import { ThriftService } from './../../thrift/thrift.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-domestic-thrift',
  templateUrl: './domestic-thrift.component.html',
  styleUrls: ['./domestic-thrift.component.css']
})
export class DomesticThriftComponent implements OnInit {

  email: any = localStorage.getItem("email")
  accountID: any = localStorage.getItem("accountID");
  thriftComponentType: any = "Domestic Thrift"

  constructor(private thriftService: ThriftService) { }

  ngOnInit(): void {
  }


  createThrift = new FormGroup({
    thriftName: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    attainableAmount: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    noOfPeople: new FormControl("", Validators.required),
    startDate: new FormControl("", Validators.required),
    duration: new FormControl("", Validators.required)
  })

  submitThrift(){
    if(this.createThrift.valid){
      const payload = this.createThrift.getRawValue();
      payload.email = this.email;
      payload.userAccountNumber = this.accountID

     this.thriftService.domesticThrift(payload).subscribe((res:any) => {
      Swal.fire({
        icon: 'success',
        title: 'Your Domestic Thrift Created',
        footer: `${res.result}`
      });

      console.clear()
      this.createThrift.reset();
   
     })

    }
  }


}
