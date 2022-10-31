import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { AuthguardGuard } from '../Shared/authguard.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent, 
    children: [
      {path: 'myprofile', component: ProfileComponent, canActivate: [AuthguardGuard]},
    { path: '', redirectTo: 'myprofile', pathMatch: 'full'},
  ]}
  
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
