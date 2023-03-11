import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from 'jquery';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }
  getRoles():Promise<any>{
    return this.http.get(`${environment.BASE_URL}role/getRoles`).toPromise();
  }
  addRoles(model:any): Observable<any>{
    return this.http.post(`${environment.BASE_URL}role/addRole`,model)
  }
  addDepartments(model:any): Observable<any>{
    return this.http.post(`${environment.BASE_URL}department/addDepartment`,model )
  }
  getDepartments(): Promise<any>{
    return this.http.get(`${environment.BASE_URL}department/getDepartment`).toPromise();
  }
  getadminUsers():Promise<any>{
    return this.http.get(`${environment.BASE_URL}user/userList`).toPromise()
  }
}
