import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CretaeEmployeeComponent } from './employees/cretae-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { from } from 'rxjs';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeesDetailsGuardService } from './employees/employees-details-guard.service'

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',
    component: ListEmployeesComponent,
    //we do this to prefetch data from route resolver.
    resolve: {employeeList: EmployeeListResolverService}
  },
  { path: 'edit/:id', 
    component: CretaeEmployeeComponent,
    // canDeactivate: [CreateEmployeeCanDeactivateGuardService],
  },
  { path: 'employees/:id', component: EmployeeDetailsComponent, canActivate: [EmployeesDetailsGuardService] },
  { path: 'notfound', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
