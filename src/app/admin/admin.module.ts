import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EdituserComponent } from './users/edituser/edituser.component';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { DepartmentComponent } from './department/department.component';
import { RoleComponent } from './role/role.component';
import { GiveapprovalComponent } from './giveapproval/giveapproval.component';
import { UsersComponent } from './users/users.component';
import { FacultylistComponent } from './facultylist/facultylist.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { StudentComponent } from './student/student.component';
import { StuleavesComponent } from './stuleaves/stuleaves.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { ChangeroleComponent } from './changerole/changerole.component';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    EdituserComponent,
    DashboardComponent,
    AdminsidebarComponent,
    AdminheaderComponent,
    DepartmentComponent,
    RoleComponent,
    GiveapprovalComponent,
    UsersComponent,
   AdduserComponent,
    FacultylistComponent,
    StudentComponent,

    StuleavesComponent,
    SettingsComponent,
    ChangeroleComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
