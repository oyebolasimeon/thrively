import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentCardComponent } from '../Payment/payment-card/payment-card.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthguardGuard } from '../Shared/authguard.guard';
import { BoardComponent } from './board/board.component';
import { DashboardComponent } from './dashboard.component';
import { JoinThriftComponent } from './thrift/join-thrift/join-thrift.component';
import { ThriftlogsComponent } from './thrift/thriftlogs/thriftlogs.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent, 
    children: [
      {path: 'home', component: BoardComponent, canActivate: [AuthguardGuard]},
      {path: 'payment-details', component: PaymentCardComponent, canActivate: [AuthguardGuard]},
      {path: 'txns', component: ThriftlogsComponent, canActivate: [AuthguardGuard]},
      {path: 'join-thrift', component: JoinThriftComponent, canActivate: [AuthguardGuard]},
      {path: 'myprofile', component: ProfileComponent, canActivate: [AuthguardGuard]},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
  ]}
  
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
