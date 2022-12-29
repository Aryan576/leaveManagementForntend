import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { ApprovedleaveComponent } from './approvedleave/approvedleave.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StusidebarComponent } from './stusidebar/stusidebar.component';
import { StuheaderComponent } from './stuheader/stuheader.component';
import { PendingleaveComponent } from './pendingleave/pendingleave.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { LeavesComponent } from './leaves/leaves.component';
import { ProfileComponent } from './profile/profile.component';
import { RejectedleaveComponent } from './rejectedleave/rejectedleave.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ApprovedleaveComponent,
    DashboardComponent,
    StusidebarComponent,
    StuheaderComponent,
    PendingleaveComponent,
    LeaverequestComponent,
    LeavesComponent,
    ProfileComponent,
    RejectedleaveComponent
    
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
