import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayemployeeComponent } from './payemployee.component';

describe('PayemployeeComponent', () => {
  let component: PayemployeeComponent;
  let fixture: ComponentFixture<PayemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
