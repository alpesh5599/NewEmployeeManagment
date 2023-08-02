import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { Router } from '@angular/router';
import { CandidateStatus } from '../candidateStatus';

@Component({
  selector: 'app-get-candidate',
  templateUrl: './get-candidate.component.html',
  styleUrls: ['./get-candidate.component.css']
})
export class GetCandidateComponent  implements OnInit {
  
  candidates: any = [];

  constructor(private candidateService: CandidateService, private router: Router) {
    
  }
  ngOnInit(): void {
    this.getAllcandidateData();
  }


  getAllcandidateData() {
    this.candidateService.getAllCandidateData().subscribe(
      (res) => {
        this.candidates = res;
      },
      (error) => {
        console.error('Error:', error);
      }
    )
  }

  sendtointrvw(candidate: any) {
    if (candidate) {
      this.candidateService.sharedData = candidate;
    } else {
      this.candidateService.sharedData = this.candidates;
    }
    this.router.navigate(['home/setInterview']);
  }

  getList(id: any) {
    const indexOfStatus = Object.keys(CandidateStatus).indexOf(id);
    return Object.values(CandidateStatus)[indexOfStatus];
  }
}
