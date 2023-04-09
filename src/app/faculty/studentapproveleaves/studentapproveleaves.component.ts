import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyserviceService } from '../facultyservice.service';

@Component({
  selector: 'app-studentapproveleaves',
  templateUrl: './studentapproveleaves.component.html',
  styleUrls: ['./studentapproveleaves.component.css']
})
export class StudentapproveleavesComponent implements OnInit {

  approvedleaves: any;
  dtOptions: DataTables.Settings = {};
  leave!:{}

  constructor(private rut:Router,private fac:FacultyserviceService) { }
  
  ngOnInit(): void {
   
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.fac.getmcastudentapprove().then(res=>{
      this.approvedleaves=res['results']
      console.log("Approved",this.leave);
      
     
      
    })
  }
}
