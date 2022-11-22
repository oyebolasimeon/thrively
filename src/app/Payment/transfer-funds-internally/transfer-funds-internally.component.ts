import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-transfer-funds-internally',
  templateUrl: './transfer-funds-internally.component.html',
  styleUrls: ['./transfer-funds-internally.component.css']
})
export class TransferFundsInternallyComponent implements OnInit {

  senderAccountID = localStorage.getItem("accountID");
  userData: any;
  labelFlag: boolean = false;
  errorMes: any;

  constructor(private userProfile: ProfileService) { }

  ngOnInit(): void {
  }

  transferData = new FormGroup({
    recieverAccountId: new FormControl("", Validators.required),
    // recieverName: new FormControl(" ", Validators.required),
    amount: new FormControl("", Validators.required)

  })

  getRecieverName(d: any){
      let payload = d.value;
        this.userProfile.getUserDetails(payload).subscribe((res:any) => {
          if(res.status==200){
            this.labelFlag = true;
            this.userData = res.result[0]
          } else if(res.status == 204){
            this.labelFlag = false;
            this.errorMes = res?.message;
          }
          
        })
  }


  send(){
    const data =  this.transferData.getRawValue();
    data.recieverName = this.userData.firstname+' '+this.userData.lastname;
    data.senderAccountID = this.senderAccountID;
    console.log(data)

  }

}
