import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 
import { Employee } from '../models/employee.model';
import {Observable, of } from 'rxjs';
import { EmployeeService } from './employee.service';
import { map, catchError } from 'rxjs/operators';
import { ResolvedEmployeeList } from './resolved-employeelist.model';

@Injectable({
  providedIn: 'root'
})
// export class EmployeeListResolverService implements Resolve<ResolvedEmployeeList>  {
 
//   constructor(private _employeeService: EmployeeService){}
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedEmployeeList>{

//     return this._employeeService.getEmployees()
//     .pipe(
//       map((employeeList) => new ResolvedEmployeeList(employeeList)),
//       catchError((error: any) => of(new ResolvedEmployeeList(null, error)))
//     );
//   }

// }

//---------------------- Instead of creating a separate file ResolvedEmployeeList we can do this.--------------------------//
export class EmployeeListResolverService implements Resolve<Employee[] | string>  {
 
  constructor(private _employeeService: EmployeeService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[] | string>{

    return this._employeeService.getEmployees()
    .pipe(
      catchError((error: string) => of(error))
    );
  }

}

