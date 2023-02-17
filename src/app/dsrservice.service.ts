import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DSRServiceService {

  constructor(private http:HttpClient) { }

  saveReport(form:any):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/report/savereport`,form);
  }
}
