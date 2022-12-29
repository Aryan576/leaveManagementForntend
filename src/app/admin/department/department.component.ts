import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  myDepartmentForm!: FormGroup;

  constructor(private rut:Router,private toastr: ToastrService) { }
  
  ngOnInit(): void {

    this.myDepartmentForm = new FormGroup({
      departmentname:new FormControl('',Validators.required)
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
