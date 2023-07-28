import { Component } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent {

  candidateId:any;
  candidateData:any;

  constructor(private candidateService:CandidateService){
    this.candidateId=this.candidateService.candidateupdateData.id;
    this.candidateData=this.candidateService.candidateupdateData;
    this.candidateForm.setValue(this.candidateData);
    
  }
  
  candidateForm=new FormGroup({
    id:new FormControl(),
    applyingPosition:new FormControl('',[Validators.required]),
    candidateFirstName:new FormControl('',[Validators.required]),
    candidateLastName:new FormControl('',[Validators.required]),
    candidateEmail:new FormControl('',[Validators.required, Validators.email]),
    candidatePhoneNo:new FormControl('',[Validators.required]),
    candidateSkills:new FormControl('',[Validators.required]),
    joiningAvailability:new FormControl('',[Validators.required]),
    comments:new FormControl('',[Validators.required])
  })


  editCandidate(){
    // this.candidateService.editCandidateData(this.candidateId, this.candidateForm.value).subscribe(res =>{
    //   console.log(res);
      
    // })
  }
}