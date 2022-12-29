import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approvedleave',
  templateUrl: './approvedleave.component.html',
  styleUrls: ['./approvedleave.component.css']
})
export class ApprovedleaveComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
