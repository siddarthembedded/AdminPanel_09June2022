import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdereportComponent } from './ordereport.component';

describe('OrdereportComponent', () => {
  let component: OrdereportComponent;
  let fixture: ComponentFixture<OrdereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
