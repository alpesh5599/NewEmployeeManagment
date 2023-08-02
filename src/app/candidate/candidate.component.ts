import { HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateModel } from '../CandidateModel';
import { CandidateStatus } from '../candidateStatus';
import { CandidateService } from '../services/candidate.service';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  NgxBootstrapSnackbarService,
} from '@tech-pro/ngx-bootstrap-snackbar';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  title: string = "";
  isEditMode: boolean = false;
  editData!: any;

  candidateForm: any = FormGroup;
  editForm: any = FormGroup;

  selectedFile: any = null;
  candidate = new CandidateModel();


  status: any;

  constructor(private fb: FormBuilder,
    private candidateService: CandidateService,
    private router: Router, private route: ActivatedRoute,
    private notoficationUtils: NotificationService) {
  }

  ngOnInit(): void {
    this.candidateForm = this.fb.group({
      position: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required]),
      skills: new FormControl('', [Validators.required]),
      joining: new FormControl('', [Validators.required]),
      comments: new FormControl(),
      file: new FormControl(),
      candidateStatus: new FormControl(''),
    });

    this.status = Object.keys(CandidateStatus);

   this.route.params.subscribe((params) => {
      const candidateId = params['id'];

      // Parse the Id in Integer
      const id = parseInt(candidateId);
      if (id) {
        this.isEditMode = true;
        this.getCandidateById(id);
      }

    });
  }
 
  getCandidateById(employeeId: any): any {
    this.candidateService.getCandidateById(employeeId).subscribe(
      (response) => {
        this.editData = response.body;
        if(this.editData){
          this.title = "Edit Candidate Details";
          this.candidateForm.patchValue(this.editData);
        }else{
          this.title = "Add Candidate Details";
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  submitDetails() {
    const formValue = this.candidateForm.value;

    if (formValue && this.candidate) {
      if(this.editData){
        this.candidate.id = this.editData.id
      }
      this.candidate.firstName = formValue.firstName;
      this.candidate.position = formValue.position;
      this.candidate.lastName = formValue.lastName;
      this.candidate.email = formValue.email;
      this.candidate.contact = formValue.contact;
      this.candidate.skills = formValue.skills;
      this.candidate.joining = formValue.joining;
      this.candidate.comments = formValue.comments;
      if (this.selectedFile) {
        this.candidate.fileName = this.selectedFile.name;
      }
    }

    this.candidateService.saveCandidateData(this.candidate, this.selectedFile).subscribe(
      (response: any) => {
        this.notoficationUtils.success(response.message);
      },
      (error: any) => {
        this.notoficationUtils.error(error.error)
      }
    );
    this.candidateForm.reset();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

}