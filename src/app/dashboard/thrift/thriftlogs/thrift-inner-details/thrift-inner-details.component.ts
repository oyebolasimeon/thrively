import { ThriftService } from './../../thrift.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-thrift-inner-details',
  templateUrl: './thrift-inner-details.component.html',
  styleUrls: ['./thrift-inner-details.component.css']
})
export class ThriftInnerDetailsComponent implements OnInit {
  
  @Input() itemClicked: any;
  thriftResponse: any;
  constructor(private thriftService: AuthService ) { }

  ngOnInit(): void {
   this.fetchSingleThrift();
    
    
  }


  fetchSingleThrift(){
    const payload = this.itemClicked;
  
    this.thriftService.getThriftByID(payload).subscribe((res: any) =>{
      this.thriftResponse = res.result[0]
      console.log(this.thriftResponse)
    })
  }

}
