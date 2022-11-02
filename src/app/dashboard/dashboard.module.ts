import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { FormsModule } from '@angular/forms';
import { PaymentCardComponent } from '../Payment/payment-card/payment-card.component';
import { ThriftlogsComponent } from './thrift/thriftlogs/thriftlogs.component';
import { InnerDetailsComponent } from './thrift/thrift-table/inner-details/inner-details.component';
import { ThriftInnerDetailsComponent } from './thrift/thriftlogs/thrift-inner-details/thrift-inner-details.component';


@NgModule({
  declarations: [ProfileComponent, PaymentCardComponent, ThriftlogsComponent, InnerDetailsComponent, ThriftInnerDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
