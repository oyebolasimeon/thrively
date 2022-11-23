import { ProfileService } from 'src/app/profile/profile.service';
import { ThriftService } from './../../thrift.service';
import { Component, ComponentRef, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-thrift-inner-details',
  templateUrl: './thrift-inner-details.component.html',
  styleUrls: ['./thrift-inner-details.component.css']
})
export class ThriftInnerDetailsComponent implements OnChanges {
  
  @Input() itemClicked: any;
  @Output() close = new EventEmitter();
  componentRef!: ComponentRef <ThriftInnerDetailsComponent>;
  
  thriftResponse: any;
  userDetails: any;
  constructor(private thriftService: AuthService, private userService: ProfileService, private host: ElementRef<HTMLElement> ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchSingleThrift();
  }

  killComponent() {    
}

  onClose() {
    this.close.emit(null);
  }

  // @HostListener('unloaded')
  // ngOnDestroy() {
  //   console.log('Items destroyed');
  // }


  fetchSingleThrift(){
    const payload = this.itemClicked;
  
    this.thriftService.getThriftByID(payload).subscribe((res: any) =>{
      this.thriftResponse = res.result[0]
      this.getThriftCreator(res.result[0]?.userAccountNo)
      console.log(this.thriftResponse)
    })
  }


    getThriftCreator(id: any){
    let payload = id;
    this.userService.getUserDetails(payload).subscribe((data: any) => {
      this.userDetails = data.result[0].firstname + ' ' + data.result[0].lastname;
      console.log(this.userDetails)
      // return this.userDetails;
      
    })
  }

  

}
