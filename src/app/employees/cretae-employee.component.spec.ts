import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CretaeEmployeeComponent } from './cretae-employee.component';

describe('CretaeEmployeeComponent', () => {
  let component: CretaeEmployeeComponent;
  let fixture: ComponentFixture<CretaeEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CretaeEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CretaeEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
