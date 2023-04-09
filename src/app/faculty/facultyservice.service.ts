import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacultyserviceService {

 
  constructor(private http:HttpClient) { }
  getMcastudentpending():Promise<any>{
    return this.http.get(`${environment.BASE_URL}leave/getmcastudetns`).toPromise()
  }
  getmcastudentapprove():Promise<any>{
    return this.http.get(`${environment.BASE_URL}leave/getmcastudentapproved`).toPromise()
  }
  getmcastudentrejected():Promise<any>{
    return this.http.get(`${environment.BASE_URL}leave/getmcastudentreject`).toPromise()
  }

  acceptstudentleave(model: any):Observable<any>{
    return this.http.put(`${environment.BASE_URL}leave/getmcastudetnapproved`,model)
  }
  rejectstudentleave(model:any):Observable<any>{
    return this.http.put(`${environment.BASE_URL}leave/getmcastudentreject`,model)
  }

}
