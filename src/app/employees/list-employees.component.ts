import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model'

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@klst.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/Matt.jpg'
    },
    {
      id: 2,
      name: 'David',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'david@klst.com',
      dateOfBirth: new Date('11/25/1970'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/david.jpg'
    },
    {
      id: 1,
      name: 'Simon',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'simon@klst.com',
      dateOfBirth: new Date('10/2/1972'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/Simon.jpg'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
