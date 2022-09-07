import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  loading: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onLoad(){
    setTimeout(() => {
      this.loading = false;
    }, 3000)
    
  }

  back(){
    history.back()
  }
}
