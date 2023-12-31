import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateModel } from '../CandidateModel';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  candidateupdateData:any;  
  sharedData: any;

  constructor(private http:HttpClient) {}

  saveCandidateData(body:any, file:Blob):Observable<any>{
    
    let formData = new FormData();
    formData.append("candidate", JSON.stringify(body))
    formData.append("file",file)

    return this.http.post("http://localhost:8080/candidate/add", formData);
  }

  upload(file:any):Observable<any>{
    return new Observable<any>((observer) => { this.http.post("http://localhost:8080/api/v1/candidate/file/upload", file).subscribe(s => { observer.next(s); observer.complete(); }); });
  }

  getAllCandidateData(){
    return this.http.get("http://localhost:8080/candidate/getAll")
  }

  getCandidateById(id:any):Observable<any>{
    return this.http.get("http://localhost:8080/candidate/getById/"+id)
  }

  editCandidateData(id:any, body:any, file:Blob):Observable<any>{ 
    
    let formData = new FormData();
    formData.append("candidate", JSON.stringify(body))
    formData.append("file",file)
    
    return new Observable<any>((observer) => { this.http.put("http://localhost:8080/api/v1/candidate/editCandidate/"+id, formData).subscribe(cand => { observer.next(cand); observer.complete(); }); });

  }
  
}