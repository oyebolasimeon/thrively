import { Router } from '@angular/router';
import  Swal from 'sweetalert2';
import { ProfileService } from './../../../profile/profile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-join-thrift',
  templateUrl: './join-thrift.component.html',
  styleUrls: ['./join-thrift.component.css']
})
export class JoinThriftComponent implements OnInit {
  thriftID: any;
  service: any;
  thriftDetails: any;
  profile: any;
  userDetails: any;
  thriftType: any;
  finalJoin = false;
  accountID: any = localStorage.getItem("accountID");
  thriftPayload: any;
  thriftMessage: any;

  constructor(
    private services: AuthService, 
    private router: Router,
    private profileServices: ProfileService) { }

  ngOnInit(): void {
  }

  joinThrift = new FormGroup({
    // account_id: this.accountID,
    thrift_id: new FormControl("", Validators.required)
  })

  back(){
    history.back();
  }

  cancelModal(){
    // this.router.navigateByUrl('myboard', {skipLocationChange: true}).then(() => {
    //   this.router.navigate(['myboard'])
    this.finalJoin = false;
    // })
console.log("Killed Join Thrift")
    // this.ngOnInit();
  }

  getThrift(){
    
    const payload = this.joinThrift.getRawValue();
    // const payload = e.value
    payload.account_id = this.accountID;
     this.thriftPayload = {...payload}
    this.services.getThriftByID(this.thriftPayload.thrift_id).subscribe((res: any) => {
      
      this.finalJoin = true;
      if(res.status == 204){
        this.thriftDetails = res
        this.thriftMessage = res.message;
        this.finalJoin = false;
        console.log("Thrift Message ",this.thriftMessage);
      } else  if(res.status == 200){
        // this.joinThrifts(result)
        this.thriftDetails = res?.result[0];
        this.thriftMessage = res.message;
        console.log("Thrift Message ",this.thriftMessage);
        
        // console.log(this.thriftDetails)
        this.thriftType = res?.result[0]?.thriftType;
        this.getThriftCreator(this.thriftDetails?.userAccountNo);
        // console.log(this.thriftDetails)
      }
      
      
    })
  }

  getThriftCreator(id: any){
    let payload = id;
    this.profileServices.getUserDetails(payload).subscribe((data: any) => {
      this.userDetails = data.result[0];
     
    })
  }

  joinThrifts(){
    let res;
    const payload = {
      "thrift_id": this.thriftPayload.thrift_id,
      "account_id": this.accountID
    }
    console.log(payload)
    this.services.joinThrift(payload).subscribe((data: any) => {
      res = data.message
      if(res.status == 200){
        Swal.fire({
          icon: 'success',
          title: 'Thrift Joined Successfully, Check your Email.'
        });
      }
      else if(res.status == 204){
        Swal.fire({
          icon: 'success',
          title: 'You have previously Joined This Thrift'
        });
      }
     
    })
    // return res;
  }

}
