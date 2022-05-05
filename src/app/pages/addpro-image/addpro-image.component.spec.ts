import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddproImageComponent } from './addpro-image.component';

describe('AddproImageComponent', () => {
  let component: AddproImageComponent;
  let fixture: ComponentFixture<AddproImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
