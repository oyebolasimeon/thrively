import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css']
})
export class PaymentCardComponent implements OnInit {
  cnumber: string = '';
  
  cname : string= '';
  expDate : string = '';
  csecret : string = '';  

  constructor() { }

  ngOnInit(): void {
    
  }

  cardNumber(e:any){
    let val = e.value.split('-').join(''); 
   this.cnumber =  val.match(/.{1,4}/g).join('-');

  }

}
