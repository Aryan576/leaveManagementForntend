import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myLoginForm!: FormGroup;

  constructor(private rut: Router,private toastr : ToastrService,private login:LoginserviceService) { }

  ngOnInit(): void {

    this.myLoginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  submit(): void {


    this.login.getlogin(this.myLoginForm.value).subscribe(res=>{

          if(res.code !=400){
                      if (res.results[0].roleid == 6) {
                              this.rut.navigateByUrl('admindashboard')
                              this.toastr.success(res.message);
                        }else if(res.results[0].roleid == 8) {
                          
                          this.rut.navigateByUrl('ctdashboard');
                          this.toastr.success(res.message);

                        }else if(res.results[0].roleid == 9){
                          
                          this.rut.navigateByUrl('facdashboard');
                          this.toastr.success(res.message);
                        
                        }else if(res.results[0].roleid == 10){
                          
                          this.rut.navigateByUrl('studashboard');
                          this.toastr.success(res.message);
                        }else{
                        
                          this.toastr.error(res.message);
                        }
                      }else{
                        this.rut.navigateByUrl('/');
                        this.toastr.error(res.message);
                      }
            })
    

   
  }

}
