import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendingleave',
  templateUrl: './pendingleave.component.html',
  styleUrls: ['./pendingleave.component.css']
})
export class PendingleaveComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
