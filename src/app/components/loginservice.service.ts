import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  getlogin(model:any): Observable<any>{
    return this.http.post(`${environment.BASE_URL}user/userLogin`,model)
  }
  studentLogin(model:any): Observable<any>{
    return this.http.post(`${environment.BASE_URL}students/studentsLogin`,model)
  }
}
