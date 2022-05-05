import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedelComponent } from './employeedel.component';

describe('EmployeedelComponent', () => {
  let component: EmployeedelComponent;
  let fixture: ComponentFixture<EmployeedelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
