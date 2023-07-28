import { Component } from '@angular/core';
import { SetInterviewService } from '../services/set-interview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-scheduled-interview-details',
  templateUrl: './get-scheduled-interview-details.component.html',
  styleUrls: ['./get-scheduled-interview-details.component.css']
})
export class GetScheduledInterviewDetailsComponent {

  constructor(private service:SetInterviewService, private router:Router){this.getAllInterviewDetails()}

  details:any=[]

  getAllInterviewDetails(){
    this.service.getInterviewDetails().subscribe(res =>{
      this.details=res;
    })
  }

  editDetails(body:any){
    this.service.interviewdata=body;

    this.router.navigate(['/updateInterviewDetails'])    
  }
}