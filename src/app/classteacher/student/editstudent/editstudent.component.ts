import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  myEditStudentForm!: FormGroup;
  constructor(private rut: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.myEditStudentForm = new FormGroup({

      fullname: new FormControl('', Validators.required),
      phno: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      sem: new FormControl('', Validators.required),
      enrollmentno: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)

    })

  }

  submit() {
    if (this.myEditStudentForm.valid) {
      this.toastr.success('Success!', 'Student Updated!');
      this.rut.navigateByUrl('ctstudent');
    } else {
      this.toastr.error('Invalid!', 'Enter Value in Form!');
    }

  }

}
