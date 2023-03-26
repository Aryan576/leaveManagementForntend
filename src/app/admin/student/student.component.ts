import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  adminstudents:any={}
  constructor(private rut:Router,private toastr: ToastrService,
    private admin: AdminserviceService) { }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    
    this.admin.getStudents().then(students=>{
        this.adminstudents=students.results
    })
    
   
  }


}
