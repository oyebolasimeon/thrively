import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/profile/profile.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-thrift-info',
  templateUrl: './thrift-info.component.html',
  styleUrls: ['./thrift-info.component.css']
})
export class ThriftInfoComponent implements OnInit {

  thriftID: any;
  thriftDetails: any;
  userDetails: any;

  constructor( private ar: ActivatedRoute, private service: AuthService, private profile: ProfileService) { }

  ngOnInit(): void {
    this.thriftID = this.ar.snapshot.paramMap.get("id")
    this.getThrift();
    console.log(this.getThrift());
  }

  getThrift(){
    const payload = this.thriftID;
    this.service. getThriftByID(payload).subscribe((res: any) => {
      this.thriftDetails = res.result[0]
      console.log(this.thriftDetails);
      this.getThriftCreator();
    })
  }

  getThriftCreator(){
    let payload = this.thriftDetails.account_id;
    this.profile.getUserDetails(payload).subscribe((data: any) => {
      this.userDetails = data.result[0];
    })
  }

}
