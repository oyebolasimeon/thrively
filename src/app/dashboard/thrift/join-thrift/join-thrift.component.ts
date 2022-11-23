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

  constructor(private services: AuthService, private profileServices: ProfileService) { }

  ngOnInit(): void {
  }

  joinThrift = new FormGroup({
    // account_id: this.accountID,
    thrift_id: new FormControl("", Validators.required)
  })

  back(){
    history.back();
  }

  getThrift(){
    
    const payload = this.joinThrift.getRawValue();
    // const payload = e.value
    payload.account_id = this.accountID;
     this.thriftPayload = {...payload}
    this.services.getThriftByID(this.thriftPayload.thrift_id).subscribe((res: any) => {
      this.thriftDetails = res.result[0]
      this.finalJoin = true;
      if(res.status == 204){
        this.thriftDetails = res
        this.finalJoin = false;
      } else  if(res.status == 200){
        // this.joinThrifts(result)
        this.thriftType = res?.result[0].thriftType;
 
        this.thriftDetails = res;
        console.log(this.thriftDetails)
      }
      this.getThriftCreator(this.thriftDetails.result[0].userAccountNo);
      
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
    this.services.joinThrift(this.thriftPayload).subscribe((data: any) => {
      res = data.message
    })
    return res;
  }

}
