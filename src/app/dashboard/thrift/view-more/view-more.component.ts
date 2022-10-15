import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  thriftID: any;

  constructor(private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.thriftID = this.ar.snapshot.paramMap.get("id")
  }

}
