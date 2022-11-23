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
  clickedItem: any;
  thriftTypes: any;
  showModal:boolean = true;

  accNumber = localStorage.getItem("accountID");
  thriftlog : any;
  constructor( private thriftService: ThriftService, private userService: ProfileService ) { }

  ngOnInit(): void {
    this.fetchAllThrift();
  }

  public fetchAllThrift(): any{
    const payload = this.accNumber;
    if (this.thriftType == 'Domestic Thrift'){
      this.thriftTypes = "domesticThrift"
      this.thriftService.fetchAllThrift(payload).subscribe((res:any) =>{
        this.thriftlog = res.result.sort().reverse().filter((x: any)=> x.thriftType === "domesticThrift")
        // console.log("Logs  ",this.thriftlog)

      })
    }
    else if(this.thriftType == 'Personal Thrift'){
      this.thriftTypes = "personalThrift"
      this.thriftService.fetchAllThrift(payload).subscribe((res:any) =>{
        this.thriftlog = res.result.sort().reverse().filter((x: any)=> x.thriftType === "personalThrift")
        // console.log("Logs  ",this.thriftlog)

      })
    }
  
  }

  getClickedItem(id: any){
    this.clickedItem = id;
    console.log("1",this.clickedItem);
    
    // document.getElementById("moreThriftDetails")?.click()
   
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
