import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
// import { Observable } from 'rxjs/Observable';
import { Observable, from, of, ErrorObserver } from 'rxjs';
import { mapTo, delay, catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Type } from '@angular/compiler';
// import 'rxjs/add/operator/catch';

// import 'rxjs/add/operator/delay';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httClient: HttpClient) { }
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@klst.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
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
      department: '2',
      isActive: true,
      photoPath: 'assets/images/david.jpg'
    },
    {
      id: 3,
      name: 'Simon',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'simon@klst.com',
      dateOfBirth: new Date('10/2/1972'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/Simon.jpg'
    }
  ]

  baseUrl = 'http://localhost:3000/employees';

  getEmployees(): Observable<Employee[]> {
    // return of(this.listEmployees);
    return this.httClient.get<Employee[]>(this.baseUrl)
          .pipe(
            // catchError(this.handleError)
          );

    /* delay doesnt work have to work on it.
    return of(this.listEmployees).delay(2000);
    */
    //return Observable.of(this.listEmployees);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if(errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error: ', errorResponse.error.message);
    } else {
      console.log('Client Side Error: ', errorResponse);

    }
    return //new ErrorObservable('There is a problem with the service. We are notified and working on it');
  }

  // getEmployee(id: number): Employee {
  //   return this.listEmployees.find(e => e.id === id);
  // }

  getEmployee(id: number): Observable<Employee> {
    return this.httClient.get<Employee>(`${this.baseUrl}/${id}`)
          // .pipe(catchError(this.handleError));
}


  addEmployee(employee: Employee): Observable<Employee> {

      return this.httClient.post<Employee>(this.baseUrl, employee, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      // .pipe(catchError(this.handleError));
  }

  // save(employee: Employee): Observable<Employee> {
  //   if(employee.id === null) {
  //     const maxId = this.listEmployees.reduce(function(e1, e2) {
  //       return (e1.id > e2.id) ? e1 : e2
  //     }).id;
  //     employee.id = maxId + 1;
  //     this.listEmployees.push(employee);
  //   } else {
  //     const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
  //     this.listEmployees[foundIndex] = employee;
  //   }
  // }


  updateEmployee(employee: Employee): Observable<void> {

      return this.httClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })

  }


  // deleteEmployee(id: number) {
  //   const i = this.listEmployees.findIndex(e => e.id === id);
  //   if( i !== -1) {
  //     this.listEmployees.splice(i, 1);
  //   }
  // }

  deleteEmployee(id: number): Observable<void> {
    return this.httClient.delete<void>(`${this.baseUrl}/${id}`)
          // .pipe(catchError(this.handleError));
  }
}
