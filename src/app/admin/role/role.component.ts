import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  myRoleForm!: FormGroup;
  rowss: any={};

  constructor(
    private rut: Router,
    private toastr: ToastrService,
    private admin: AdminserviceService,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    this.myRoleForm = new FormGroup({
      rolename: new FormControl('', Validators.required),
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.admin.getRoles().then((res) => {
      this.rowss = res.results;
      console.log("roles"+JSON.stringify( this.rowss));
      
    });
  }

  submit() {
    if (this.myRoleForm.valid) {
      this.admin.addRoles(this.myRoleForm.value).subscribe((res) => {
        this.toastr.success('Success!', 'Role Added!');

        this.rut.navigateByUrl('adminrole');
        window.location.reload();
      });
    } else {
      this.toastr.error('Invalid!', 'Enter Value in Form!');
    }
  }
  refresh(): void {
    window.location.reload();
  }
}
