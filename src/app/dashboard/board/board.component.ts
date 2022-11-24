import { AuthService } from 'src/app/Service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  accountID = localStorage.getItem("accountID")
  notifications: any;
  p: number = 1;
  loading: boolean = true;
  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.getNotification();
  }

  getNotification(){
    const payload = this.accountID;
    this.service.getNotification(payload).subscribe((res:any) =>{
      this.notifications = res.result;
    })
  }

  onLoad(){
    setTimeout(() => {
      this.loading = false;
    }, 3000)
    
  }
  

}
