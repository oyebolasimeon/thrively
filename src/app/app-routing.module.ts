import { CreateThriftComponent } from './dashboard/thrift/create-thrift/create-thrift.component';
import { ThriftBoardComponent } from './dashboard/thrift/thrift-board/thrift-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Auth/register/register.component';
import { JoinThriftComponent } from './dashboard/thrift/join-thrift/join-thrift.component';
import { CreateThriftsComponent } from './dashboard/thrift/create-thrifts/create-thrifts.component';
import { ThriftlogsComponent } from './dashboard/thrift/thriftlogs/thriftlogs.component';

const routes: Routes = [
  {path: 'login', component: SigninComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'myboard', component: DashboardComponent},
  {path: "thrift", component: ThriftBoardComponent},
  { path: "create-thrift", component: CreateThriftsComponent},
  { path: "join-thrift", component: JoinThriftComponent},
  {path: "logs", component: ThriftlogsComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/myboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
