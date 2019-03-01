import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CretaeEmployeeComponent } from './cretae-employee.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CretaeEmployeeComponent> {
  canDeactivate(component: CretaeEmployeeComponent): boolean {
    if(component.createEmployeeForm.dirty) {
      return confirm('Are you sure you want to descard your changes?')
    }

    return true;
  };

  constructor() { }
}
