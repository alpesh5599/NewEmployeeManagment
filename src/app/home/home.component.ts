import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RoutesRecognized } from '@angular/router';
import { CandidateComponent } from '../candidate/candidate.component';
import { SetInterviewComponent } from '../set-interview/set-interview.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // navLinks: any[];
  // activeLinkIndex = -1;
  // constructor(private router: Router) {
  //   this.navLinks = [
  //     {
  //       label: 'Candidate',
  //       path:'/candidate',
  //       index: 0
  //     }, {
  //       label: 'Interview',
  //       path: '/setInterview',
  //       index: 1
  //     }, {
  //       label: 'Employee',
  //       path: '/employee',
  //       index: 2
  //     },
  //   ];
  // }


  // ngOnInit(): void {
  //   this.router.events.subscribe((res) => {
  //     this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  //   });
  // }


  constructor(router: Router) {
    router.navigate(['/candidate']);
  }

}

