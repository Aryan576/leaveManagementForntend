import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facultylist',
  templateUrl: './facultylist.component.html',
  styleUrls: ['./facultylist.component.css']
})
export class FacultylistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
