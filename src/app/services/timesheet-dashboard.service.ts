import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimesheetDashboardService {

  constructor(private http: HttpClient) { }

  save(body: any) {
    return this.http.post("http://localhost:8080/api/v1/timesheet/save", body)
  }
  
}