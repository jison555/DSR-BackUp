import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DSRServiceService {

  constructor(private http:HttpClient) { }

  saveReport(form:any):Observable<any>{
    console.log("savereport", form)
    return this.http.post<any>(`http://localhost:8080/report/savereport`,form);
  }

  getAllReport():Observable<any>{
    console.log("get report")
    return this.http.get<any>(`http://localhost:8080/report/getallreport`);
  }
}
