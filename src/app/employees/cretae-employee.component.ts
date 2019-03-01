import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employee.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cretae-employee',
  templateUrl: './cretae-employee.component.html',
  styleUrls: ['./cretae-employee.component.css']
})
export class CretaeEmployeeComponent implements OnInit {
  // We are creating the below line to check or get access to the employeeForm variable from the html so that we can know if the form is dirty or not

  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  // gender = 'male';
  // isActive = true;
  //department = '3';
  previewPhoto = false;
  panelTitle: string;
  employee: Employee;

  deapartments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
    {id: 5, name: 'Admin'},

  ];

  datepickerConfig: Partial<BsDatepickerConfig>;

  constructor(private _employeeService: EmployeeService,
            private _router: Router,
            private _route: ActivatedRoute) { 
    this.datepickerConfig = Object.assign({}, 
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2018, 11, 31),
      });
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  //we use this save method when we pass the argument from the html we dont need it right now as we have 2 way data binding and the changes made we are reciveing in the employee array.
  // saveEmployee(newEmployee: Employee): void {
  //   console.log(newEmployee)
  // }

  // saveEmployee(): void {
  //   // const newEmployee: Employee = Object.assign({}, this.employee)
  //   // //this._employeeService.save(this.employee);
  //   // this._employeeService.save(newEmployee);

  //   // // empForm.reset();
  //   // this.createEmployeeForm.reset();
  //   // this._router.navigate(['list']);

  //   //----- We are doing this to make changes for http request ----//

  //   //this._employeeService.save(this.employee);
  //   this._employeeService.save(this.employee).subscribe(
  //     (data: Employee) => {
  //       console.log(data);
  //       this.createEmployeeForm.reset();
  //       this._router.navigate(['list']);
    
  //     },
  //     (error: any) => console.log(error)
  //   );

  //   // empForm.reset();

  // }


  saveEmployee(): void {
    if(this.employee.id == null) {
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          this.createEmployeeForm.reset();
          this._router.navigate(['list']);
      
        },
        (error: any) => console.log(error)
      );

    } else {
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          this.createEmployeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
       );
    }


  }



  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    })
  }

  private getEmployee(id: number) {
    if(id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        email: '',
        phoneNumber: null,
        contactPreference: null,
        dateOfBirth: null,
        department: null,
        isActive: null,
        photoPath: null,
      };
      this.panelTitle = 'Create Employee';
      this.createEmployeeForm.reset();
    } else {
      this.panelTitle = 'Edit Employee';
      this._employeeService.getEmployee(id).subscribe
      ((employee) => this.employee = employee),
      (err: any) => console.log(err);
    }
  }

}
