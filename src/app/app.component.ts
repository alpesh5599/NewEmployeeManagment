import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emp_management';

  // constructor(public router:Router){}

  navLinks: any[];
  activeLinkIndex = -1;
  constructor(public router: Router) {
    this.navLinks = [
      {
        label: 'Candidate',
        path: '/candidate',
        index: 0
      }, {
        label: 'Interview',
        path: '/setInterview',
        index: 1
      }, {
        label: 'Employee',
        path: '/employee',
        index: 2
      }, {
        path: '/timesheet-dashboard',
        index: 3
      },
    ];
  }


  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
