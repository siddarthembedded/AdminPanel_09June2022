import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreportComponent } from './breport.component';

describe('BreportComponent', () => {
  let component: BreportComponent;
  let fixture: ComponentFixture<BreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
