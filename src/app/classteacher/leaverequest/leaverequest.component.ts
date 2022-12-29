import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {
myLeaveForm!: FormGroup;
  constructor(private rut : Router,private toastr : ToastrService) { }

  ngOnInit(): void {

    this.myLeaveForm  = new FormGroup({
    
      leavetype:new FormControl('',Validators.required),
      leavefrom:new FormControl('',Validators.required),
      leaveto:new FormControl('',Validators.required),
      noofdays:new FormControl('',Validators.required),
      sendto:new FormControl('',Validators.required),
      leavereason:new FormControl('',Validators.required)

    })

  }

  submit() {
  
    if (this.myLeaveForm.valid) {
    
      this.toastr.success('Wait for approval!','Leave Send Successfully!')
      console.log(this.myLeaveForm.value);
      this.rut.navigateByUrl('ctleavestatus')
      
    }else{
      this.toastr.error('Invalid!','Please Fill the Details!')
    }
  }

}
