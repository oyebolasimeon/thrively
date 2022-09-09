import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-thrift',
  templateUrl: './join-thrift.component.html',
  styleUrls: ['./join-thrift.component.css']
})
export class JoinThriftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  back(){
    history.back();
  }

}
