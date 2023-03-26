import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from '../../adminservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  myUserForm!: FormGroup;
  admirole:any={}
  admidept:any={}
  constructor(private rut: Router, private toastr: ToastrService,private admin:AdminserviceService) { }

  ngOnInit(): void {
      this.admin.getRoles().then(roles=>{
        this.admirole=roles.results
      })
      this.admin.getDepartments().then(dept=>{
        this.admidept=dept.results
      })

    this.myUserForm = new FormGroup({
      fullname: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      roleid: new FormControl('', Validators.required),
      deptid: new FormControl('', Validators.required),
      

    })

  }

  submit() {
    if (this.myUserForm.valid) {

      this.admin.addUsers(this.myUserForm.value).subscribe(res=>{
        if(res.code == 200){
          console.log(this.myUserForm.value);
      
          this.toastr.success('Success!', 'User Added!');
          this.rut.navigateByUrl('adminusers');
        }else{
          this.toastr.error(res.message);
        }
      })
      
    } else {
      this.toastr.error('Invalid!', 'Enter Value in Form!');
    }

  }
}


