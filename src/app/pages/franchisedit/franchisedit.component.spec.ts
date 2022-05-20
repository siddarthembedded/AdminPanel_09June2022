import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseditComponent } from './franchisedit.component';

describe('FranchiseditComponent', () => {
  let component: FranchiseditComponent;
  let fixture: ComponentFixture<FranchiseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchiseditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
