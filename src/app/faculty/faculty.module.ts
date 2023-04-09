import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { FacultyheaderComponent } from './facultyheader/facultyheader.component';
import { FacultysidebarComponent } from './facultysidebar/facultysidebar.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentapproveleavesComponent } from './studentapproveleaves/studentapproveleaves.component';
import { StudentrejectedleavesComponent } from './studentrejectedleaves/studentrejectedleaves.component';
import { StudentpendingleavesComponent } from './studentpendingleaves/studentpendingleaves.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LeaverequestComponent,
    FacultyheaderComponent,
    FacultysidebarComponent,
    LeavestatusComponent,
    StudentapproveleavesComponent,
    StudentrejectedleavesComponent,
    StudentpendingleavesComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FacultyModule { }
