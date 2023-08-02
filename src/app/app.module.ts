import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { EmployeeModuleComponent } from './employee-module/employee-module.component';
import { GetCandidateComponent } from './get-candidate/get-candidate.component';
import { GetScheduledInterviewDetailsComponent } from './get-scheduled-interview-details/get-scheduled-interview-details.component';
import { HomeComponent } from './home/home.component';
import { ResumeUploaderComponent } from './resume-uploader/resume-uploader.component';
import { SetInterviewComponent } from './set-interview/set-interview.component';
import { UpdateInterviewDetailsComponent } from './update-interview-details/update-interview-details.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from "@angular/material/tabs";
import { DashboardComponent } from './timesheet/dashboard/dashboard.component';
import { DatePipe } from '@angular/common';
import { DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { NgxBootstrapSnackbarModule } from '@tech-pro/ngx-bootstrap-snackbar';
import { EnumKeyToValuePipe } from './enum-key-to-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    HomeComponent,
    GetCandidateComponent,
    EditCandidateComponent,
    SetInterviewComponent,
    GetScheduledInterviewDetailsComponent,
    UpdateInterviewDetailsComponent,
    EmployeeModuleComponent,
    ResumeUploaderComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    EnumKeyToValuePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    NgxBootstrapSnackbarModule.forRoot(),
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CandidateComponent),
      multi: true,
    },
     DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
