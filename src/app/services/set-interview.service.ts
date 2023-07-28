import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetInterviewService {

  constructor(private http:HttpClient) { }

  interviewdata:any;

  setInterview(body:any){
    return this.http.post("http://localhost:8080/api/v1/interview/schedule/interview", body)
  }

  getInterviewDetails(){
    return this.http.get("http://localhost:8080/api/v1/interview/getAll/interviews")
  }

  updateInterviewDetails(id:any, body:any){
    return this.http.put("http://localhost:8080/api/v1/interview/edit/interview/"+id, body)
  }
}
