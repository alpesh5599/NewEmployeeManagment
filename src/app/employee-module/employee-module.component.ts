import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeModel } from '../EmployeeModel';
import { EmployeeService } from '../services/employee.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-module',
  templateUrl: './employee-module.component.html',
  styleUrls: ['./employee-module.component.css']
})
export class EmployeeModuleComponent implements OnInit {

  marksheetFile!: Blob;
  certificateFile!: Blob;
  letterFile!: Blob;
  marksheet1: any;

  selectedFiles!: FileList;
  files: any = [];

  constructor(private empService: EmployeeService, private formBuilder: FormBuilder) { this.employeeData(); }
  empForm: any = FormGroup;
  editForm: any = FormGroup;

  ngOnInit(): void {
    this.empForm = this.formBuilder.group({
      employeeName: new FormControl(),
      employeeDOB: new FormControl(),
      employeeEmail: new FormControl(),
      employeePhoneNo: new FormControl(),
      joiningStatus: new FormControl(['']),
      joiningDate: new FormControl(),
      aadharCard: new FormControl(),

      address: this.formBuilder.group({
        areaAndStreet: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        pinCode: new FormControl()
      }),

      documents: this.formBuilder.group({
        marksheet: new FormControl(),
        certification: new FormControl(),
        experienceLetter: new FormControl()
      })

    });

    this.editForm = this.formBuilder.group({
      id: new FormControl(),
      name: new FormControl(),
      dob: new FormControl(),
      email: new FormControl(),
      phoneNo: new FormControl(),
      joiningStatus: new FormControl(['']),
      joiningDate: new FormControl(),
      aadharCard: new FormControl(),

      address: this.formBuilder.group({
        id: new FormControl(),
        areaAndStreet: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        pinCode: new FormControl(),
        employee: new FormControl(),
      }),

      // empdocs: this.formBuilder.group({
      //   id: new FormControl(),
      //   fileData: new FormControl(),
      //   type: new FormControl(),
      //   // marksheet: new FormControl(),
      //   // certification: new FormControl(),
      //   // experienceLetter: new FormControl()
      // })

    });

  }


  // selectFiles(event: any) {
  //   this.selectedFiles = event.target.files;
  //   for (let i = 0; i < this.selectedFiles.length; i++) {
  //     this.files.push(this.selectedFiles[i]);
  //     console.log(this.selectedFiles[i] + ", " + this.selectedFiles);
  //   }
  // }

  marksheet = document.getElementById("marksheet");
  certificate = document.getElementById("certification");
  letter = document.getElementById("experience_letter");

  onFileChange(event: any) {
    console.log(event);

    // if(this.files){
    this.files.push(event.target.files[0])
    // }

    // this.files = event.target.files;
    // console.log(this.files);

    // if (this.files) {
    //   this.marksheetFile = this.files;
    //   console.log("marksheetFile==> " + this.marksheetFile);
    // }
  }


  // onFileChange1(event: Event) {
  //   console.log(event.target == document.getElementById("marksheet"))


  //   // if((event.target as HTMLInputElement).value){
  //   //   return (event.target as HTMLInputElement).value;
  //   // }else{
  //   //   return null;
  //   // }
  // }

  employeeModel = new EmployeeModel();

  submitEmpData() {
    const formData = this.empForm.value;

    this.employeeModel.name = formData.employeeName;
    this.employeeModel.email = formData.employeeEmail;
    this.employeeModel.phoneNo = formData.employeePhoneNo;
    this.employeeModel.dob = formData.employeeDOB;
    this.employeeModel.joiningDate = formData.joiningDate;
    this.employeeModel.joiningStatus = formData.joiningStatus as unknown as string;
    this.employeeModel.aadharCard = formData.aadharCard;

    this.employeeModel.address.areaAndStreet = formData.address.areaAndStreet;
    this.employeeModel.address.city = formData.address.city;
    this.employeeModel.address.state = formData.address.state;
    this.employeeModel.address.pinCode = formData.address.pinCode;

    this.employeeModel.documents.fileData = formData.documents.marksheet;
    this.employeeModel.documents.fileData = formData.documents.certification;
    this.employeeModel.documents.fileData = formData.documents.experienceLetter;

    // console.log("all files : " + this.files);

    this.empService.saveEmployee(this.employeeModel, this.files).subscribe(res => {
      // console.log(res);
      this.showList = true;
      this.showForm = false;
    })
  }


  employees: any;
  employeeData() {
    this.empService.getAllEmployee().subscribe(res => {
      this.employees = res;
      console.log(this.employees);

    })
  }

  edit(data: any) {
    this.empService.employeeupdateData = data
    console.log(data);

    this.editForm.setValue(data);
  }

  EditEmpData() {
    var editId = this.empService.employeeupdateData.id
    this.empService.editEmployee(editId, this.editForm.value, this.files);
  }

  getAadhar() {
    // this.empService.getEmployeeByAadharNumber();
  }

  showForm: boolean = false;
  showList: boolean = true;
  showButton: boolean = true;
  showButton1: boolean = false;
  showEditForm: boolean = false;


  showEmpForm() {
    this.showForm = true;
    this.showList = false;
    this.showButton = false;
    this.showButton1 = true;
    this.showEditForm = false;
  }

  showEmpList() {
    this.showList = true;
    this.showForm = false;
    this.showButton1 = false;
    this.showButton = true;
    this.showEditForm = false;
  }

  showEditingForm() {
    this.showEditForm = true;
    this.showForm = false;
    this.showList = false;
    this.showButton = false;
    this.showButton1 = false;
  }


}