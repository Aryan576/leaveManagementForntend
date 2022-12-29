import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeroleComponent } from './changerole/changerole.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './department/department.component';
import { FacultylistComponent } from './facultylist/facultylist.component';
import { GiveapprovalComponent } from './giveapproval/giveapproval.component';
import { RoleComponent } from './role/role.component';
import { SettingsComponent } from './settings/settings.component';
import { StatusComponent } from './status/status.component';
import { StudentComponent } from './student/student.component';
import { StuleavesComponent } from './stuleaves/stuleaves.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { EdituserComponent } from './users/edituser/edituser.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'admindashboard', component: DashboardComponent },
  { path: 'admindepartment', component: DepartmentComponent },
  { path: 'adminrole', component: RoleComponent },
  {
    path: 'adminusers', component: UsersComponent, children: [
      // {path:'adminadduser',component:AdduserComponent},
      // {path:'adminedituser',component:EdituserComponent}
    ]
  },
  { path: 'admingiveapproval', component: GiveapprovalComponent },
  { path: 'adminfacultylist', component: FacultylistComponent },
  { path: 'adminadduser', component: AdduserComponent },
  { path: 'adminedituser', component: EdituserComponent },
  { path: 'adminstudent', component: StudentComponent },

  { path: 'adminstuleaves', component: StuleavesComponent },
  { path: 'adminsettings', component: SettingsComponent },
  { path: 'adminchangerole', component: ChangeroleComponent },
  { path: 'adminstatus', component: StatusComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
