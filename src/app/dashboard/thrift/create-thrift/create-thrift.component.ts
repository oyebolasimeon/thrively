import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-thrift',
  templateUrl: './create-thrift.component.html',
  styleUrls: ['./create-thrift.component.css']
})
export class CreateThriftComponent implements OnInit {

  schedule = "Weekly";
  thriftType = "Personal"
  constructor() { }

  ngOnInit(): void {
  }

  createThrift = new FormGroup({
    thriftName: new FormControl(" ", Validators.required),
    amount: new FormControl(" ", Validators.required),
    description: new FormControl(" ", Validators.required),
    users: new FormControl(" ", Validators.required),
    thriftype: new FormControl(" ", Validators.required)
    
  })

  back(){
    history.back();
  }

}
