import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rejectedleave',
  templateUrl: './rejectedleave.component.html',
  styleUrls: ['./rejectedleave.component.css']
})
export class RejectedleaveComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
