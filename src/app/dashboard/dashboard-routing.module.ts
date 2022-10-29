import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent, 
    children: [
      {path: 'myprofile', component: ProfileComponent},
    // { path: '', redirectTo: 'home', pathMatch: 'full'},
  ]}
  
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
