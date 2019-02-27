import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cretae-employee',
  templateUrl: './cretae-employee.component.html',
  styleUrls: ['./cretae-employee.component.css']
})
export class CretaeEmployeeComponent implements OnInit {
  
  // gender = 'male';
  // isActive = true;
  //department = '3';

  constructor() { }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value)
  }

  ngOnInit() {
  }

}
