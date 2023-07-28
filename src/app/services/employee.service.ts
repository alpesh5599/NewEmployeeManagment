import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  saveEmployee(body: any, file: any=[]): Observable<any> {

    let formData = new FormData();
    formData.append("employee", JSON.stringify(body))

    file.forEach((element: any) => {
      console.log(element);
      formData.append("files", element);
    });

    //   for(let i=0;i<file.length;i++){
    //     console.log(file[i].name);
    //     formData.append('files', file[i]);
    // }

    // return this.httpClient.post("http://localhost:8080/api/v1/employee/save/employee", body);
    return new Observable<any>((observer) => { this.http.post("http://localhost:8080/api/v1/employee/save/employee", formData).subscribe(emp => { observer.next(emp); observer.complete(); }); });

  }

  getAllEmployee() {
    return this.http.get("http://localhost:8080/api/v1/employee/getAll/employee")
  }

  getEmployeeByAadharNumber(aadharNumber: any) {
    return this.http.get("http://localhost:8080/api/v1/employee/getEmployee/" + aadharNumber)
  }

  employeeupdateData:any;
  editEmployee(id:any, body: any, file: any=[]): Observable<any> {

    let formData = new FormData();
    formData.append("employee", JSON.stringify(body))

    file.forEach((element: any) => {
      console.log(element);
      formData.append("files", element);
    });

    //   for(let i=0;i<file.length;i++){
    //     console.log(file[i].name);
    //     formData.append('files', file[i]);
    // }

    // return this.httpClient.post("http://localhost:8080/api/v1/employee/save/employee", body);
    return new Observable<any>((observer) => { this.http.post("http://localhost:8080/api/v1/employee/editEmployee/"+id, formData).subscribe(emp => { observer.next(emp); observer.complete(); }); });

  }


}