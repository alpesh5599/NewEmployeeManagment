import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CandidateService } from '../services/candidate.service';
import { HttpResponse, HttpStatusCode } from '@angular/common/http';
import { CandidateModel } from '../CandidateModel';
import { CandidatewithFile } from '../CandidatewithFile';
import { CandidateStatus } from '../candidateStatus';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidateForm: any = FormGroup;
  editForm: any = FormGroup;

  file!: Blob;
  candidate = new CandidateModel();
  candidates: any = [];

  showEditForm: boolean = false;
  showForm: boolean = false;
  showList: boolean = true;
  showButton: boolean = true;
  showButton1: boolean = false;

  status: any;
  keys = Object.keys;

  constructor(private candidateService: CandidateService, private router: Router,) {
    // this.convertByteArrayToFile()
  }

  ngOnInit(): void {
    // this.status = Object.keys(CandidateStatus);

    this.candidateForm = new FormGroup({
      position: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required]),
      skills: new FormControl('', [Validators.required]),
      joining: new FormControl('', [Validators.required]),
      comments: new FormControl(),
      file: new FormControl(),

    });

    this.editForm = new FormGroup({
      id: new FormControl(),
      candidateStatus: new FormControl(['']),
      position: new FormControl(['']),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required]),
      skills: new FormControl('', [Validators.required]),
      joining: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required]),
      fileData: new FormControl(),
      name: new FormControl(),
      type: new FormControl(),
    });

    this.status = Object.keys(CandidateStatus);
    this.candidateData();
  }

  myfile!: string;
  candidateData() {
    let res = this.candidateService.getAllCandidateData().subscribe(res => {
      this.candidates = res;

      for (let i of this.candidates) {
        this.myfile = i.fileData;
      }
      this.showList = true;
    });

  }

  submitDetails() {

    const formValue = this.candidateForm.value;

    if (formValue && this.candidate) {
      this.candidate.firstName = formValue.firstName;
      this.candidate.position = formValue.position;
      this.candidate.lastName = formValue.lastName;
      this.candidate.email = formValue.email;
      this.candidate.contact = formValue.contact;
      this.candidate.skills = formValue.skills;
      this.candidate.joining = formValue.joining;
      this.candidate.fileName = this.file.name;
      this.candidate.comments = formValue.comments;
    }

    this.candidateService.saveCandidateData(this.candidate, this.file).subscribe((res: HttpResponse<any>) => {
    })

    this.showmsg = true;
  }

  // fileData:any;

  // convertByteArrayToFile() {
  //   const blob = new Blob([this.candidates.fileData], { type: 'application/pdf' });
  //   this.fileData = URL.createObjectURL(blob);
  //   console.log(this.fileData);

  // }

  showmsg: boolean = false;
  showmsg1: boolean = false;
  onFileChange(event: any) {
    const a = event.target.files[0];

    if (a) {
      this.file = a;
    }
  }

  showCandidateForm() {
    this.showForm = true;
    this.showList = false;
    this.showButton = false;
    this.showButton1 = true;
    this.showEditForm = false;

  }

  showCandidateList() {
    this.showList = true;
    this.showForm = false;
    this.showButton1 = false;
    this.showButton = true;
    this.showEditForm = false;
  }


  edit(data: any) {
    this.candidateService.candidateupdateData = data;

    // This is setting for now....
    data.fileData = "";
    this.editForm.patchValue(data);
  }

  showEditingForm() {
    this.showEditForm = true;
    this.showForm = false;
    this.showList = false;
    this.showButton = false;
    this.showButton1 = true;
  }

  updateCandidate() {
    var editId = this.candidateService.candidateupdateData.id;

    this.candidateService.editCandidateData(editId, this.editForm.value, this.file).subscribe(res => {
      if (res.HttpStatusCode == 200) {
        this.showmsg = true;
      } else {
        this.showmsg1 = true;
      }
    });


  }

  sendtointrvw(candidate: any) {
    if(candidate){
      this.candidateService.sharedData = candidate;
      console.log("1 => "+JSON.stringify(this.candidateService.sharedData))
    }else{
      this.candidateService.sharedData = this.candidates;
      console.log("2 =>"+JSON.stringify(this.candidateService.sharedData))
    }
    this.router.navigate(['setInterview']);
  }

}