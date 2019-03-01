import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model'
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResolvedEmployeeList } from './resolved-employeelist.model';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  error: string;
  constructor(private _employeeService: EmployeeService,
              private _router: Router,
              private _route: ActivatedRoute) {
                // const resolvedEmployeeList: ResolvedEmployeeList = this._route.snapshot.data['employeeList'];
                // if(resolvedEmployeeList.error == null) {
                //   this.employees = resolvedEmployeeList.employeeList;
                // } else {
                //   this.error = resolvedEmployeeList.error
                // }

                const resolvedData: Employee[] | string = this._route.snapshot.data['employeeList'];
                if(Array.isArray(resolvedData)) {
                  this.employees = resolvedData;
                } else {
                  this.error = resolvedData;
                }
                // this.employees = this._route.snapshot.data['employeeList'];
                // if(this._router.snapshot.queryMap.has('searchTerm')){
                //   this.searchTerm = this._router.snapshot.queryParamMap.get('searchTerm');
                // } else {
                //   this.filteredEmployees = this.employees;
                // }

              }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(empList => {
      this.employees = empList;
      // if(this._router.snapshot.queryMap.has('searchTerm')){
      //   this.searchTerm = this._router.snapshot.queryParamMap.get('searchTerm');
      // } else {
      //   this.filteredEmployees = this.employees;
      // }
    });
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId]);
  }

  onDeleteNotification(id: number) {
    console.log(id);
    // const i = this.filteredEmployees.findIndex(e => e.id === id);
    // if( i !== -1) {
    //   this.filteredEmployees.splice(i, 1);
    // }
  }

  
//------------------- This change is done when we need to pass the data from child compnent to parent component--//
  // dataFromChild: string;

  // handleNotify(eventData: string) {
  //   this.dataFromChild = eventData
  // }

//-------- this change is when we want to pass more than one value.------///

  // dataFromChild: Employee;

  // handleNotify(eventData: Employee) {
  //   this.dataFromChild = eventData
  // }


}
