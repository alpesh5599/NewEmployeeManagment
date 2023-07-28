import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-uploader',
  templateUrl: './resume-uploader.component.html',
  styleUrls: ['./resume-uploader.component.css']
})
export class ResumeUploaderComponent implements OnInit {

  jsonData: any;


  constructor(private service: CandidateService, private _snackBar: MatSnackBar, private router: Router) { }
  resume!: FormGroup;

  ngOnInit(): void {
    this.resume = new FormGroup({
      myFile: new FormControl()
    })
    console.log(history.state.jsonData);

  }


  formData = new FormData();

  onFileChange(event: any) {

    this.formData.append('file', event.target.files[0]);
    this.formData.append('id', history.state.jsonData.id);

    this.service.upload(this.formData).subscribe(data => {
      console.log(data.response)
      if (data.response) {
        this.openSnackBar(data.response, "OK");
      } else {
        this.openSnackBar(data.response, "");
      }
    })
  }
  openSnackBar(message?: string, action?: string) {
    if (message) {
      this._snackBar.open(message, action);
    }
    if (action === "OK") {
      this.router.navigate(['setInterview']);
    }
  }


}