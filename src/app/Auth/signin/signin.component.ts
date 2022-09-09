import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  back(){
    history.back()
  }

  navigateUser(){
    this.route.navigate(['/myboard'])
  }
  navigatenewUser(){
    this.route.navigate(['/signup'])
  }

}
