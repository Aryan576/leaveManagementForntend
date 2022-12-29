import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GiveapprovalComponent } from './giveapproval/giveapproval.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'ctdashboard',component:DashboardComponent},
  {path:'ctgiveapproval',component:GiveapprovalComponent},
  {path:'ctleaverequest',component:LeaverequestComponent},
  {path:'ctleavestatus',component:LeavestatusComponent},
  {path:'ctstudent',component:StudentComponent},
  {path:'ctaddstudent',component:AddstudentComponent},
  {path:'cteditstudent',component:EditstudentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassteacherRoutingModule { }
