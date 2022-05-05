import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComdetailComponent } from './comdetail.component';

describe('ComdetailComponent', () => {
  let component: ComdetailComponent;
  let fixture: ComponentFixture<ComdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
