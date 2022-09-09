import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thriftlogs',
  templateUrl: './thriftlogs.component.html',
  styleUrls: ['./thriftlogs.component.css']
})
export class ThriftlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  back(){
    history.back();
  }
}
