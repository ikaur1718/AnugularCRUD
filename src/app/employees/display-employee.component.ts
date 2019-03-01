import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  private selectedEmployeeId: number;
  @Input() employee: Employee;
  @Input() searchTerm: String;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  confirmDelete = false;
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  viewEmployee() {
      this._router.navigate(['/employees', this.employee.id]);  
      // queryParams: { 'searchTerm': this.searchTerm}
  }

  editEmployee() {
    this._router.navigate(['/edit', this.employee.id]);  
  }

//   deleteEmplyoee(){
//    this._employeeService.deleteEmployee(this.employee.id);
//    this.notifyDelete.emit(this.employee.id);
//  }

  deleteEmplyoee(){
    this._employeeService.deleteEmployee(this.employee.id).subscribe(
      () => {
        console.log(`Employee with Id = ${this.employee.id} deleted`),
        (err) => console.log(err)
      }
    );
    this.notifyDelete.emit(this.employee.id);
  }

 //To create input decorator we need to import it and then use it to declare a variable We use input decorator to pass information from the parent component to the child component. We ca intercept and react to Input property changes: there are two ways to do that a) Property setter b) ngOnChanges life cycle hooks
  // @Input() employee: Employee
  


  //----------------------Setter and Getter methods to get the changes of the props----------------------------//
//----------------Setter and Getter methods to get the changes of the from the input value-----------------------//


  // onChanges(changes: SimpleChanges) {
  //   console.log(changes);
  //----------we are type casting the value of changes.employee.previousValue to Employee class.--------------//
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue;
  //   console.log('Previous: ' + (previousEmployee ? previousEmployee.name : 'NULL'));
  //   console.log('Current: ' + currentEmployee.name)

  // }

//----------------------Setter and Getter methods to get the changes of the props----------------------------//
//----------------Setter and Getter methods to get the changes of the from the input value-----------------------//


  // private _employee: Employee;
  // @Input() 
  // set employee(val: Employee) {
  //   console.log('Previous : ' + (this._employee ? this._employee.name : 'NULL'));
  //   console.log('Current : ' + val.name);
  //   this._employee = val;
  // }

  // get employee():Employee {
  //   return this._employee;
  // }

  //- Here we are showing an example of how to pass one value back to the parent component using Output decorator//
  /* Why are we mentioning the type of notify or output to be an eventEmitter because the value is passed on an event. With EvenEmitter we can only pass one value to the parent*/
  // @Input() employee: Employee;
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  // handleClick() {
  //   this.notify.emit(this.employee.name)
  // }

  //------------------ To Pass more than one value to the parent class with Output decorator --------- ///

  // @Input() employee: Employee;
  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  // handleClick() {
  //   this.notify.emit(this.employee)
  // }

  //--- Now we will learn how to pass value for child to parent through a template reference ----------//

  // @Input() employee: Employee;

  // getEmployeeNameAndGender(): string {
  //   return this.employee.name + ' ' + this.employee.gender;
  // }

}
//---------Angular property setter vs ngOnChanges --------------//
/*
  ngOncganges
    1) We get all the changes instead of just the changes realted to a single property
    2) usful when multiple properties changes.

  Property Setter
    1) property setter is specific to a givin property, so we only get changes to the specific property.
    2) Useful when you want to keep track of a single property.
*/