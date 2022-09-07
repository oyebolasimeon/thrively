import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thrift',
  templateUrl: './create-thrift.component.html',
  styleUrls: ['./create-thrift.component.css']
})
export class CreateThriftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  back(){
    history.back();
  }

}
