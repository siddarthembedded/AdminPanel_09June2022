import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComsalComponent } from './com.component';

describe('ComsalComponent', () => {
  let component: ComsalComponent;
  let fixture: ComponentFixture<ComsalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComsalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComsalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
