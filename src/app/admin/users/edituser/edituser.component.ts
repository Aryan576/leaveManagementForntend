import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  myUserEditForm!: FormGroup;
  constructor(private rut: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.myUserEditForm = new FormGroup({
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
      status: new FormControl('', Validators.required)

    })

  }

  submit() {
    if (this.myUserEditForm.valid) {
      this.toastr.success('Success!', 'User Details Updated!');
      this.rut.navigateByUrl('adminusers');
    } else {
      this.toastr.error('Invalid!', 'Enter Value in Form!');
    }

  }

}
