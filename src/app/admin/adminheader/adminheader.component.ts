import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {
  username!:String
  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('admin.name'));
    
  }

}
