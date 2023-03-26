import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from '../../adminservice.service';

@Component({
  selector: 'app-adminaddstudent',
  templateUrl: './adminaddstudent.component.html',
  styleUrls: ['./adminaddstudent.component.css']
})
export class AdminaddstudentComponent implements OnInit {

  myStudentForm!: FormGroup;
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
    this.myStudentForm = new FormGroup({
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
      semester: new FormControl('', Validators.required),
      enrollmentno: new FormControl('', Validators.required),
      roleid: new FormControl('', Validators.required),
      deptid: new FormControl('', Validators.required),
      

    })

  }

  submit() {
    if (this.myStudentForm.valid) {
     
      this.admin.addStudent(this.myStudentForm.value).subscribe(res=>{
        if(res.code==200){
          this.toastr.success('Success!', 'Student Added!');
          this.rut.navigateByUrl('adminstudent');
        }else if(res.code==409){
          this.toastr.warning('Student Already Exists', res.message);
        }
        else{
          this.toastr.error(res.message);
        }
      })
     
    } else {
      this.toastr.error('Invalid!', 'Enter Value in Form!');
    }

  }

}
