import { TestBed } from '@angular/core/testing';

import { EmployeesDetailsGuardService } from './employees-details-guard.service';

describe('EmployeesDetailsGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeesDetailsGuardService = TestBed.get(EmployeesDetailsGuardService);
    expect(service).toBeTruthy();
  });
});
