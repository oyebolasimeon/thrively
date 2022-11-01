import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { FormsModule } from '@angular/forms';
import { PaymentCardComponent } from '../Payment/payment-card/payment-card.component';


@NgModule({
  declarations: [ProfileComponent, PaymentCardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
