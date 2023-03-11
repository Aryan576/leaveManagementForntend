import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LoginserviceService } from '../loginservice.service';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myLoginForm!: FormGroup;
  users!:Users

  constructor(private rut: Router,private toastr : ToastrService,private login:LoginserviceService) { }

  ngOnInit(): void {

    this.myLoginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  submit(): void {


    this.login.getlogin(this.myLoginForm.value).subscribe(res=>{

        console.log("user detials",res.results);
        
      if(res.code===200){
        
        
                       if (res.results.roleid == 4) {
                            this.rut.navigateByUrl('admindashboard')
                            this.toastr.success(res.message);
                            localStorage.setItem('admin',JSON.stringify(res.results))        
                        } /* else if(res.results[0].roleid == 4) {
                          
                          this.rut.navigateByUrl('ctdashboard');
                          this.toastr.success(res.message);
                          localStorage.setItem('ct', JSON.stringify(res.results) )
                        }else if(res.results[0].roleid == 3){
                          
                          this.rut.navigateByUrl('facdashboard');
                          this.toastr.success(res.message);
                          localStorage.setItem('ft', JSON.stringify(res.results) )
                        }else if(res.results[0].roleid == 5){
                          
                          this.rut.navigateByUrl('studashboard');
                          this.toastr.success(res.message);
                          localStorage.setItem('students', JSON.stringify(res.results) )
                        }else{
                        
                          this.toastr.error(res.message);
                        }   */
                      }else if(res.code === 404){
                        this.toastr.error(res.message);
                      }else{
                        this.toastr.error(res.message);
                      } 
            })
    

   
  }

}
