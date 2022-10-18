import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/profile/profile.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  thriftID: any;
  thriftDetails: any;
  userDetails: any;

  constructor(private ar: ActivatedRoute, private service: AuthService, private profile: ProfileService) { }

  ngOnInit(): void {
    this.thriftID = this.ar.snapshot.paramMap.get("id")
    this.getThrift();
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

  back(){
    history.back()
  }

}
