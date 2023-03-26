import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';

import { Users } from 'src/app/components/users';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css'],
})
export class AdminheaderComponent implements OnInit {
 /*  user: Users = {
    userid: 0,
    fullname: '',
    phoneno: 0,
    birthdate: new Date(),
    gender: '',
    email: '',
    password: '',
    address: '',
    cityid: 0,
    pincode: 0,
    roleid: 0,
    status: 0,
    departmentid: 0,
  }; */
  result: any;
  fullname: any;
  
  constructor(private rut:Router) {}

  ngOnInit(): void {
    this.result = localStorage.getItem('admin');
    const userdata = JSON.parse(this.result);
    console.log("adminheader",userdata.fullname);
    
    

  }

  onLogout(): void {
    localStorage.removeItem('admin');

    this.rut.navigate(['/']);
  }
}
