import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-thrift',
  templateUrl: './create-thrift.component.html',
  styleUrls: ['./create-thrift.component.css']
})
export class CreateThriftComponent implements OnInit {

  schedule: string = "Weekly"
  thriftType : any = "Personal"
  createThrift!: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    console.log(this.thriftType)
  }

  ngOnInit(): void {
    this.createThrift = new FormGroup({
      thriftName: new FormControl(" ", Validators.required),
      amount: new FormControl(" ", Validators.required),
      description: new FormControl(" ", Validators.required),
      users: new FormControl(" ", Validators.required),
      thriftype: new FormControl(" ", Validators.required),
      emails: new FormControl(" ", Validators.required),
      schedules: new FormControl(" ", Validators.required)
      
    })
    
  }

  
  

  back(){
    history.back();
  }

  changeThriftType(e: any){
    console.log(e.value)
    this.thriftType = e.value;
    console.log(typeof(this.thriftType))
  }

}
