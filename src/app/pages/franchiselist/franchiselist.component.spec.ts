import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiselistComponent } from './franchiselist.component';

describe('FranchiselistComponent', () => {
  let component: FranchiselistComponent;
  let fixture: ComponentFixture<FranchiselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchiselistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
