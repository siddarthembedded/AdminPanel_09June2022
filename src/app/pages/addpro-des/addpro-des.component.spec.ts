import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproDesComponent } from './addpro-des.component';

describe('AddproDesComponent', () => {
  let component: AddproDesComponent;
  let fixture: ComponentFixture<AddproDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
