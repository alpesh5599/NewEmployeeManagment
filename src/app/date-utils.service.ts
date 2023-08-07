import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {
  

  constructor(private datePipe:DatePipe) { }

  getDateWithMonthDayDateYear(date:Date){
    return this.datePipe.transform(date, 'MMM dd EEEE, yyyy');
  }

  getDateWithMonthDayDate(date:Date){
    return this.datePipe.transform(date, 'MMM dd EEE');
  }

  getDateWithMonthDayYear(date:Date){
    return this.datePipe.transform(date, 'MMM dd, yyyy');
  }

  getDateWithYearMonthDay(date:Date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

}
