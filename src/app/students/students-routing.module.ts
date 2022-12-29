import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedleaveComponent } from './approvedleave/approvedleave.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { LeavesComponent } from './leaves/leaves.component';
import { PendingleaveComponent } from './pendingleave/pendingleave.component';
import { ProfileComponent } from './profile/profile.component';
import { RejectedleaveComponent } from './rejectedleave/rejectedleave.component';

const routes: Routes = [
  {path:'stuapprovedleave', component:ApprovedleaveComponent},
  {path:'studashboard', component: DashboardComponent},
  {path:'stuleaverequest',component:LeaverequestComponent},
  {path:'stuleaves' , component:LeavesComponent},
  {path:'stuprofile' , component:ProfileComponent},
  {path:'sturejectedleave' , component:RejectedleaveComponent},
  {path:'stupendingleave' , component:PendingleaveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
