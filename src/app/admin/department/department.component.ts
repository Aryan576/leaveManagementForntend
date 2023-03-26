import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private admin: AdminserviceService,private route: ActivatedRoute) { }
  
  ngOnInit(): void {

    this.myDepartmentForm = new FormGroup({
      deptname:new FormControl('',Validators.required)
    })
    this.admin.getDepartments().then(res=>{
        this.depet=res.results
        
    })
      
 
  console.log("deptid",this.route.snapshot.params);
  
  

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  submit() {
      if(this.myDepartmentForm.valid){
        this.admin.addDepartments(this.myDepartmentForm.value).subscribe(res=>{
          this.toastr.success('Success!', 'Department Added!');

          this.rut.navigateByUrl('admindepartment');
          window.location.reload();
        })
      }
  }
  refresh(): void {
    window.location.reload();
  }

}
