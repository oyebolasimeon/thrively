
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThriftService } from '../../thrift/thrift.service';

@Component({
  selector: 'app-personal-thrift',
  templateUrl: './personal-thrift.component.html',
  styleUrls: ['./personal-thrift.component.css']
})
export class PersonalThriftComponent implements OnInit {


  email: any = localStorage.getItem("email")
  accountID: any = localStorage.getItem("accountID");


  constructor(private thriftService: ThriftService) { }

  ngOnInit(): void {
  }

  createThrift = new FormGroup({
    // thriftName: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    startDate: new FormControl("", Validators.required),
    duration: new FormControl("", Validators.required)
  })

  submitThrift(){
    if(this.createThrift.valid){
      const payload = this.createThrift.getRawValue();
      payload.email = this.email;
      payload.userAccountNumber = this.accountID

     this.thriftService.personalThrift(payload).subscribe((res:any) => {
      console.log(res)
     })

    }
  }

}
