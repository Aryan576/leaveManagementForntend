import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassteacherRoutingModule } from './classteacher-routing.module';
import { CtsidebarComponent } from './ctsidebar/ctsidebar.component';
import { CtheaderComponent } from './ctheader/ctheader.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GiveapprovalComponent } from './giveapproval/giveapproval.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { DataTablesModule } from 'angular-datatables';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CtsidebarComponent,
    CtheaderComponent,
    StudentComponent,
    AddstudentComponent,
    EditstudentComponent,
    DashboardComponent,
    GiveapprovalComponent,
    LeaverequestComponent,
    LeavestatusComponent
  ],
  imports: [
    CommonModule,
    ClassteacherRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClassteacherModule { }
