import { VerificationComponent } from './../Settings/verification/verification.component';
import { CardUpdateComponent } from './../Settings/card-update/card-update.component';
import { ThriftMainBoardComponent } from './thrift-main-board/thrift-main-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentCardComponent } from '../Payment/payment-card/payment-card.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthguardGuard } from '../Shared/authguard.guard';
import { BoardComponent } from './board/board.component';
import { DashboardComponent } from './dashboard.component';
import { JoinThriftComponent } from './thrift/join-thrift/join-thrift.component';
import { ThriftlogsComponent } from './thrift/thriftlogs/thriftlogs.component';
import { PersonalThriftComponent } from './thrift-main-board/personal-thrift/personal-thrift.component';
import { DomesticThriftComponent } from './thrift-main-board/domestic-thrift/domestic-thrift.component';
import { TransferFundsInternallyComponent } from '../Payment/transfer-funds-internally/transfer-funds-internally.component';
import { ProfileUpdateComponent } from '../Settings/profile-update/profile-update.component';
import { SettingsComponent } from '../Settings/settings.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent, 
    children: [
      {path: 'home', component: BoardComponent, canActivate: [AuthguardGuard]},
      {path: 'payment-details', component: PaymentCardComponent, canActivate: [AuthguardGuard]},
      {path: 'txns', component: ThriftlogsComponent, canActivate: [AuthguardGuard]},
      { path: "logs", component: ThriftlogsComponent},
      { path: 'profile-update', component: ProfileUpdateComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'mycard', component: CardUpdateComponent },
      {path: 'thrift-board', component: ThriftMainBoardComponent, canActivate: [AuthguardGuard]},
      {path: 'transfer-funds', component: TransferFundsInternallyComponent, canActivate: [AuthguardGuard]},
      {path: 'domestic', component: DomesticThriftComponent, canActivate: [AuthguardGuard]},
      {path: 'personal', component: PersonalThriftComponent, canActivate: [AuthguardGuard]},
      {path: 'join-thrift', component: JoinThriftComponent, canActivate: [AuthguardGuard]},
      {path: 'myprofile', component: ProfileComponent, canActivate: [AuthguardGuard]},
      {path: 'verify-me', component: VerificationComponent, canActivate: [AuthguardGuard]},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
  ]}
  
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
