import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { StudentapproveleavesComponent } from './studentapproveleaves/studentapproveleaves.component';
import { StudentpendingleavesComponent } from './studentpendingleaves/studentpendingleaves.component';
import { StudentrejectedleavesComponent } from './studentrejectedleaves/studentrejectedleaves.component';

const routes: Routes = [
  {path:'facdashboard',component:DashboardComponent},
  {path:'facleaverequest',component:LeaverequestComponent},
  {path:'facleavestatus',component:LeavestatusComponent},
  {path:'studentpending',component:StudentpendingleavesComponent},
  {path:'studentapproved',component:StudentapproveleavesComponent},
  {path:'studentrejected',component:StudentrejectedleavesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
