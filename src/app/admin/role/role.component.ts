import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  myRoleForm!: FormGroup
  constructor(private rut:Router,private toastr : ToastrService ) { }
  
  ngOnInit(): void {

  this.myRoleForm = new FormGroup({
    rolename: new FormControl('', Validators.required)
  })

  this.dtOptions = {
     pagingType: 'full_numbers'
  };

  }

  submit(){
    if(this.myRoleForm.valid){
    this.toastr.success('Success!','Role Added!');
    console.log(this.myRoleForm.value);
    this.rut.navigateByUrl('adminrole');
    }else{
      this.toastr.error('Invalid!','Enter Value in Form!');  
    }
  }

}
