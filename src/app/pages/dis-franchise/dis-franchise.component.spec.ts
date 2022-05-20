import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisFranchiseComponent } from './dis-franchise.component';

describe('DisFranchiseComponent', () => {
  let component: DisFranchiseComponent;
  let fixture: ComponentFixture<DisFranchiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisFranchiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisFranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
