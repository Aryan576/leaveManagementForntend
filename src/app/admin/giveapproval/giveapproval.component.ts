import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giveapproval',
  templateUrl: './giveapproval.component.html',
  styleUrls: ['./giveapproval.component.css']
})
export class GiveapprovalComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
