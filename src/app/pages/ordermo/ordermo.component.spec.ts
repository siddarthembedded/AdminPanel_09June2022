import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermoComponent } from './ordermo.component';

describe('OrdermoComponent', () => {
  let component: OrdermoComponent;
  let fixture: ComponentFixture<OrdermoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdermoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdermoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
