import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyserviceService } from '../facultyservice.service';

@Component({
  selector: 'app-studentpendingleaves',
  templateUrl: './studentpendingleaves.component.html',
  styleUrls: ['./studentpendingleaves.component.css']
})
export class StudentpendingleavesComponent implements OnInit {
  leaves: any;
  dtOptions: DataTables.Settings = {};
  leave!:{}

  constructor(private rut:Router,private fac:FacultyserviceService ) { }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.fac.getMcastudentpending().then(res=>{
      this.leaves=res['results']
      
      
      
      
      
    })


  }

  accept(value:any){
    this.leave={"leaveid":value}
   
    
    this.fac.acceptstudentleave(this.leave).subscribe(res=>{
       this.rut.navigateByUrl('studentapproved')
        
    })
  }

  reject(value:any){
    this.leave={"leaveid":value}
   
    
    this.fac.rejectstudentleave(this.leave).subscribe(res=>{
      this.rut.navigateByUrl('studentrejected')
        
    })
  }
}
