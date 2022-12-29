import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';

const routes: Routes = [
  {path:'facdashboard',component:DashboardComponent},
  {path:'facleaverequest',component:LeaverequestComponent},
  {path:'facleavestatus',component:LeavestatusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
