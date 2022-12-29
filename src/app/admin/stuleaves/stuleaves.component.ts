import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuleaves',
  templateUrl: './stuleaves.component.html',
  styleUrls: ['./stuleaves.component.css']
})
export class StuleavesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
