import { AuthService } from 'src/app/Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  accountID = localStorage.getItem("accountID");
  notifications: any;
  notifyLength: any;
  constructor(
    private router: Router,
    private service: AuthService
  ) { }

  ngOnInit(): void {
    this.getNotification();
  }

  getNotification(){
    const payload = this.accountID;
    this.service.getNotification(payload).subscribe((res:any) =>{
      this.notifications = res.result.slice(0,5);
      this.notifyLength = res?.result.length;
      console.log(this.notifyLength);
    })
  }

  clearAll(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
