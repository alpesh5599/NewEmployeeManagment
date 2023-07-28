import { Component } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-candidate',
  templateUrl: './get-candidate.component.html',
  styleUrls: ['./get-candidate.component.css']
})
export class GetCandidateComponent {

  constructor(private candidateService:CandidateService, private router:Router){this.candidateData()
  }

  candidates:any=[];

  candidateData(){
    this.candidateService.getAllCandidateData().subscribe(res=>{
      this.candidates=res;
      console.log(this.candidates);
    })
  }

  edit(data:any){
    this.candidateService.candidateupdateData = data;
    
    this.router.navigate(['/editCandidate']); 
  }
}
