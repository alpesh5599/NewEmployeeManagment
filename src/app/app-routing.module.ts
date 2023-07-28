import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CandidateComponent } from './candidate/candidate.component';
import { GetCandidateComponent } from './get-candidate/get-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { SetInterviewComponent } from './set-interview/set-interview.component';
import { GetScheduledInterviewDetailsComponent } from './get-scheduled-interview-details/get-scheduled-interview-details.component';
import { UpdateInterviewDetailsComponent } from './update-interview-details/update-interview-details.component';
import { EmployeeModuleComponent } from './employee-module/employee-module.component';
import { ResumeUploaderComponent } from './resume-uploader/resume-uploader.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './timesheet/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "candidate", component: CandidateComponent },
  { path: "setInterview", component: SetInterviewComponent },
  { path: "employee", component: EmployeeModuleComponent },
  { path: "getCandidate", component: GetCandidateComponent },
  { path: "editCandidate", component: EditCandidateComponent },
  { path: "getInterviewDetails", component: GetScheduledInterviewDetailsComponent },
  { path: "updateInterviewDetails", component: UpdateInterviewDetailsComponent },
  { path: "file", component: ResumeUploaderComponent },
  { path:"timesheet-dashboard", component:DashboardComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }