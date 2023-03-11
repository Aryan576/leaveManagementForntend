import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  adminusers:any={}
  constructor(private rut:Router,private toastr: ToastrService,
    private admin: AdminserviceService) { }
  
  ngOnInit(): void {
    
    this.admin.getadminUsers().then(users=>{
        this.adminusers=users.results
    })
    
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
