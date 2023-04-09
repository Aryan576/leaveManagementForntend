import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyserviceService } from '../facultyservice.service';

@Component({
  selector: 'app-studentrejectedleaves',
  templateUrl: './studentrejectedleaves.component.html',
  styleUrls: ['./studentrejectedleaves.component.css']
})
export class StudentrejectedleavesComponent implements OnInit {

  rejectedleaves: any;
  dtOptions: DataTables.Settings = {};
  leave!:{}

  constructor(private rut:Router,private fac:FacultyserviceService) { }
  
  ngOnInit(): void {
   
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.fac.getmcastudentrejected().then(res=>{
      this.rejectedleaves=res.results
      console.log("rejected",this.leave);
      
     
      
    })
  }

}
