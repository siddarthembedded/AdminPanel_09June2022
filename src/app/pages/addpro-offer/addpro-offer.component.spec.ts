import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproOfferComponent } from './addpro-offer.component';

describe('AddproOfferComponent', () => {
  let component: AddproOfferComponent;
  let fixture: ComponentFixture<AddproOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
