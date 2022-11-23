import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentCardComponent } from '../Payment/payment-card/payment-card.component';
import { ThriftlogsComponent } from './thrift/thriftlogs/thriftlogs.component';
import { InnerDetailsComponent } from './thrift/thrift-table/inner-details/inner-details.component';
import { ThriftInnerDetailsComponent } from './thrift/thriftlogs/thrift-inner-details/thrift-inner-details.component';
import { ThriftMainBoardComponent } from './thrift-main-board/thrift-main-board.component';
import { PersonalThriftComponent } from './thrift-main-board/personal-thrift/personal-thrift.component';
import { DomesticThriftComponent } from './thrift-main-board/domestic-thrift/domestic-thrift.component';


@NgModule({
  declarations: [ProfileComponent, PaymentCardComponent, ThriftlogsComponent, InnerDetailsComponent,
     ThriftInnerDetailsComponent,
     ThriftMainBoardComponent,
     PersonalThriftComponent,
     DomesticThriftComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
