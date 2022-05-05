import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComdetailsclickComponent } from './comdetailsclick.component';

describe('ComdetailsclickComponent', () => {
  let component: ComdetailsclickComponent;
  let fixture: ComponentFixture<ComdetailsclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComdetailsclickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComdetailsclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
