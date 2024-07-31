import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecurdComponent } from './employeecurd.component';

describe('EmployeecurdComponent', () => {
  let component: EmployeecurdComponent;
  let fixture: ComponentFixture<EmployeecurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeecurdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
