import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  loading: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onLoad(){
    setTimeout(() => {
      this.loading = false;
    }, 3000)
    
  }
  

}
