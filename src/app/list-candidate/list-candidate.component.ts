import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { Router } from '@angular/router';
import { CandidateStatus } from '../candidateStatus';
​
@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
})
export class LisCandidateComponent implements OnInit {
​
  candidates: any = [];
​
  constructor(private candidateService: CandidateService, private router: Router) {
​
  }
  ngOnInit(): void {
    this.getAllcandidateData();
  }
​
​
  getAllcandidateData() {
    this.candidateService.getAllCandidateData().subscribe(
      (res) => {
        this.candidates = res;
        console.log(this.candidates);
​
      },
      (error) => {
        console.error('Error:', error);
      }
    )
  }
​
  sendtointrvw(candidate: any) {
    if (candidate) {
      this.candidateService.sharedData = candidate;
    } else {
      this.candidateService.sharedData = this.candidates;
    }
    this.router.navigate(['home/setInterview']);
  }
​
  getCandidateStatusList(id: any) {
    const indexOfStatus = Object.keys(CandidateStatus).indexOf(id);
    return Object.values(CandidateStatus)[indexOfStatus];
  }
​
  download(filename: string) {
    this.candidateService.downloadFile(filename).subscribe(event => {
​
      let blob: Blob = event as Blob;
      let a: any = document.createElement('a');
      a.download = filename;
      a.text = filename;
​
      a.href = window.URL.createObjectURL(blob);
      a.click();
​
      var urlOpean = URL.createObjectURL(blob);
      window.open(urlOpean, '_blank');
​
    }, error => {
      console.log("Error via downloading file..." + error);
​
    });
​
    // return this.http.get("http://localhost:8080/candidate/download/" + filename, { observe: 'response', responseType: 'blob' }).subscribe(event => {
    //     console.log(event);
​
    //     let blob: Blob = event.body as Blob;
    //     let a: any = document.createElement('a');
    //     a.download = filename;
    //     a.text = filename;
​
    //     a.href = window.URL.createObjectURL(blob);
    //     a.click();
​
    //   }, error => {
    //   console.log("Error via downloading file..." + error);
​
    // });
​
  }
​
}