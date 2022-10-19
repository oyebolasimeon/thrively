import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-thrifts',
  templateUrl: './create-thrifts.component.html',
  styleUrls: ['./create-thrifts.component.css']
})
export class CreateThriftsComponent implements OnInit {

  schedule: string = "Weekly"
  thriftType : any = "Personal"
  createThrift: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.createThrift =this.fb.group({
      thriftName: new FormControl(" ", Validators.required),
      amount: new FormControl(" ", Validators.required),
      description: new FormControl(" ", Validators.required),
      users: new FormControl(" ", Validators.required),
      thriftype: new FormControl(" ", Validators.required),
      emails: new FormControl(" ", [Validators.required, Validators.email]),
      schedules: new FormControl(" ", Validators.required)

    });
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
