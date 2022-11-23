import { ProfileService } from './../../../profile/profile.service';
import { ThriftService } from './../thrift.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import {  } from 'stream';

@Component({
  selector: 'app-thriftlogs',
  templateUrl: './thriftlogs.component.html',
  styleUrls: ['./thriftlogs.component.css']
})
export class ThriftlogsComponent implements OnInit {

  // @Output() thriftType = new EventEmitter<any>();
  @Input() thriftType: any;
  name: any;
  p: number = 1;
  userDetails: any;

  accNumber = localStorage.getItem("accountID");
  thriftlog : any;
  constructor( private thriftService: ThriftService, private userService: ProfileService ) { }

  ngOnInit(): void {
    this.fetchAllThrift();
  }

  public fetchAllThrift(): any{
    const payload = this.accNumber;
    let log;
    this.thriftService.fetchAllThrift(payload).subscribe((res:any) =>{
      this.thriftlog = res.result
      console.log("Logs  ",this.thriftlog)
      // return this.thriftlog;
    })
  }

  // getThriftCreator(id: any){
  //   let payload = id;
  //   this.userService.getUserDetails(payload).subscribe((data: any) => {
  //     this.userDetails = data.result[0].firstname + ' ' + data.result[0].lastname;
  //     // console.log(this.userDetails)
  //     // return this.userDetails;
      
  //   })
  // }



  back(){
    history.back();
  }
}
