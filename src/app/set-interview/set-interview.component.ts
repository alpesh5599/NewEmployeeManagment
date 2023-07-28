import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SetInterviewService } from '../services/set-interview.service';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-set-interview',
  templateUrl: './set-interview.component.html',
  styleUrls: ['./set-interview.component.css']
})
export class SetInterviewComponent {

  candidates:any = [];
  firstName :any;
  lastName:any
  candidateOnject:any;
  allCandidates:any=[];

  constructor(private service:SetInterviewService, private candidateService:CandidateService){
    this.getAllInterviewDetails();
    this.getAllCandidate();

    if(this.candidateService.sharedData){
      this.candidateOnject = this.candidateService.sharedData
    }

    if(this.candidateService.sharedData?.firstName && this.candidateService.sharedData?.lastName){
      this.firstName = this.candidateService.sharedData.firstName;
      this.lastName = this.candidateService.sharedData.lastName;
    }
  }

  interviewForm=new FormGroup({
    interviewerName:new FormControl('',[Validators.required]),
    interviewDateTime:new FormControl('',[Validators.required]),
    interviewOutCome:new FormControl(),
    feedback:new FormControl(),
    candidateId : new FormControl(),
  })

  submitInterviewDetails(){
    console.log(this.candidateService.sharedData);
    // debugger
    if(this.candidateService.sharedData?.id){
      this.interviewForm.controls['candidateId'].setValue(this.candidateService.sharedData.id);
    }
    console.log(this.interviewForm.value);  

    this.service.setInterview(this.interviewForm.value).subscribe(res=>{
    })
  }

  getAllInterviewDetails(){
    this.service.getInterviewDetails().subscribe(res =>{
      // console.log(res);
      
      this.candidates = res;

      
    })
  }

  getAllCandidate(){
    this.candidateService.getAllCandidateData().subscribe(res =>{
      this.allCandidates = res;
    });
  }
}