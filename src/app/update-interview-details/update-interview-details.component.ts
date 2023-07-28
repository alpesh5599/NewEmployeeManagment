import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SetInterviewService } from '../services/set-interview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-interview-details',
  templateUrl: './update-interview-details.component.html',
  styleUrls: ['./update-interview-details.component.css']
})
export class UpdateInterviewDetailsComponent {

  id:any;
  details:any;
  constructor(private service:SetInterviewService, private router:Router){
    this.id=service.interviewdata.interviewId;
    this.details=service.interviewdata;
    this.interviewForm.setValue(this.details);

  }

  interviewForm=new FormGroup({
    interviewId:new FormControl(),
    interviewerName:new FormControl('',[Validators.required]),
    interviewDateTime:new FormControl('',[Validators.required]),
    interviewOutCome:new FormControl(),
    feedback:new FormControl()
  })

  updateInterviewDetails(){
    this.service.updateInterviewDetails(this.id, this.interviewForm.value).subscribe(res=>{
      this.router.navigate(['/getInterviewDetails'])
    })
  }
}