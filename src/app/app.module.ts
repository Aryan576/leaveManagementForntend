import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { StudentsModule } from './students/students.module';
import { FacultyModule } from './faculty/faculty.module';
import { ClassteacherModule } from './classteacher/classteacher.module';
import { AdminModule } from './admin/admin.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ToastrModule.forRoot({
      timeOut: 2000, 
      closeButton: true,
      progressBar: true,
    }),
    StudentsModule,
    FacultyModule,
    ClassteacherModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
