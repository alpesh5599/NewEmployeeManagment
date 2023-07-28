import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TimesheetDashboardService } from 'src/app/services/timesheet-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public datePipe: DatePipe, public service: TimesheetDashboardService, private fb: FormBuilder) {
    this.generateDaysOfWeek();
  }

  saveForm: any = FormGroup;

  ngOnInit(): void {
    this.saveForm = new FormGroup({

      rows: this.fb.array([])

      // project: new FormControl(['']),
      // task: new FormControl(['']),
      // date:new FormControl(),
      // hours:new FormControl(),
      // totalHours: new FormControl(),

    })

  }

  itemsofForm(): FormGroup {
    return this.fb.group({
      project: new FormControl(['']),
      task: new FormControl(['']),
      date: new FormControl(),
      hours: this.fb.array([this.itemsofHours()]),
      totalHours: new FormControl(),
    });
  }

  getInnerArray(outerIndex: number): FormArray {
    const control = this.saveForm.get('rows').at(outerIndex) as FormGroup;
    // console.log(control.get('hours') as FormArray);

    return control.get('hours') as FormArray;
  }


  addInnerArrayItem(outerIndex: number) {
    const innerArray = (this.saveForm.get('rows').at(outerIndex) as FormGroup).get('hours') as FormArray;
    innerArray.push(this.itemsofHours());
  }

  hours() {
    const hours = this.saveForm.get('hours') as FormArray;
    hours.push(this.itemsofHours());
  }

  itemsofHours() {
    return this.fb.group({
      monHours: new FormControl(),
      tueHours: new FormControl(),
      wedHours: new FormControl(),
      thuHours: new FormControl(),
      friHours: new FormControl(),
      satHours: new FormControl(),
      sunHours: new FormControl(),
    })
  }

  get sumOfNumericFields() {

    // const value1 = +this.saveForm.get('hours').value;

    // let sum = 0;
    // const numericFields = [this.saveForm.get('rows').value];
    // numericFields.forEach(fieldName => {
    //   const control = this.saveForm.get(fieldName).value;

    //   sum += control
    // });

    // return this.saveForm.get('totalHours').setValue(sum);
    return null;
  }


  daysOfWeek: any = [];
  generateDaysOfWeek() {
    // if you want to give specific date then giv eit in this format only => MM-DD-YYYY
    const currentDate = new Date();

    // day in millis 
    const oneDay = 24 * 60 * 60 * 1000;

    // day of the month :
    // thw weekstart get value of currentdate - currentday + 1(bcz we want to start week from monday)
    const weekstart = currentDate.getDate() - currentDate.getDay() + 1;
    const monday = new Date(currentDate.setDate(weekstart));
    // console.log("=> " + monday + "=>" + currentDate.setDate(weekstart));

    // if we want weekend also
    // const weekend = weekstart + 6;       // end day is the first day + 6 
    // const sunday = new Date(currentDate.setDate(weekend));

    // Generate dates for the next 7 days
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(monday.getTime() + i * oneDay);
      var formattedDate = this.datePipe.transform(nextDate, 'EEE, MMM d');
      this.daysOfWeek.push(formattedDate);
    }
  }


  // For Adding Rows
  // dynamicRows: number[] = [];
  addNew() {
    // this.dynamicRows.push(0);

    const rv = this.saveForm.get('rows') as FormArray;
    rv.push(this.itemsofForm());

    // const row = this.saveForm.controls.rows as FormArray;

    // row.push(this.fb.group({
    //   project: new FormControl(['']),
    //   task: new FormControl(['']),
    //   date: new FormControl(),
    //   hours: new FormControl(),
    //   totalHours: new FormControl(),
    // }));

    // console.log(rv);

  }

  save() {
    console.log(this.saveForm.value);
    debugger
    this.service.save(this.saveForm.value).subscribe(res => {
      console.log(res);
    })
  }

}