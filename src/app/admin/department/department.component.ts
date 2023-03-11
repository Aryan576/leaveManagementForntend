import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  myDepartmentForm!: FormGroup;
  depet:any= {}

  constructor(private rut:Router,private toastr: ToastrService,
    private admin: AdminserviceService ,@Inject(DOCUMENT) private _document: Document) { }
  
  ngOnInit(): void {

    this.myDepartmentForm = new FormGroup({
      departmentname:new FormControl('',Validators.required)
    })
    this.admin.getDepartments().then(res=>{
        this.depet=res.results
        
    })

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  submit() {
    if(this.myDepartmentForm.valid){
      this.toastr.success('Success!','Department Added!');
      console.log(this.myDepartmentForm.value);
      this.rut.navigateByUrl('admindepartment');
      }else{
        this.toastr.error('Invalid!','Enter Value in Form!');  
      }
  }

}
