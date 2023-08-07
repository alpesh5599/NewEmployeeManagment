import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateUtilsService } from '../date-utils.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-log-component',
  templateUrl: './log-component.component.html',
  styleUrls: ['./log-component.component.css']
})
export class LogComponentComponent implements OnInit {

  myDate = new Date();
  myDate1:any;
  calendarForm: any;

  weekDates: any[]  = [];

  constructor(private dateUtils:DateUtilsService){
  }

  ngOnInit(): void {
    // this.myDate1 = this.dateUtils.getDateWithMonthDayDateYear(this.myDate);

    this.generateWeekDates();

    console.log(JSON.stringify(this.weekDates));
    this.weekDates.forEach(element => {
      const dateObject = convertToDateObject(element)

      if (dateObject !== null) {
        console.log(dateObject); // Output: Sun Aug 06 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
      } else {
        console.log("Invalid date string.");
      }
    });
    
  }
  generateWeekDates() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const startDate = new Date(today); // Clone the current date

    // Calculate the start date of the week (Sunday)
    startDate.setDate(today.getDate() - dayOfWeek);

    // Generate the dates for the current week (Sunday to Saturday)
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

     if(this.dateUtils.getDateWithMonthDayDate(date)){
      this.weekDates.push(this.dateUtils.getDateWithMonthDayDate(date));
     }
    }
  }

}
function convertToDateObject(dateString: any) {
  // Split the dateString into its parts (month, day, and day of the week)
  const [month, day, dayOfWeek] = dateString.split(' ');

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Create a string in the format 'MMM DD YYYY' (e.g., 'Aug 06 2023')
  const formattedDateString = `${month} ${day} ${currentYear}`;

  // Parse the formattedDateString to get the Date object
  const dateObject = new Date(formattedDateString);

  // Check if the dateObject is valid (not NaN) and return it
  if (!isNaN(dateObject.getTime())) {
    return dateObject;
  }

  // Return null if the dateObject is invalid
  return null;
}

