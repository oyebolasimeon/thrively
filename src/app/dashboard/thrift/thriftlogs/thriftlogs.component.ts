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

  accNumber = localStorage.getItem("accountID");
  thriftlog: any;
  constructor( private thriftService: ThriftService ) { }

  ngOnInit(): void {
    this.fetchAllThrift();
  }

  fetchAllThrift(){
    const payload = this.accNumber;
    this.thriftService.fetchAllThrift(payload).subscribe((res:any) =>{
      this.thriftlog = res.result
      console.log(this.thriftlog)
    })
  }

  back(){
    history.back();
  }
}
