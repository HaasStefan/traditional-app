import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSelectorComponent } from './booking-selector.component';

describe('BookingSelectorComponent', () => {
  let component: BookingSelectorComponent;
  let fixture: ComponentFixture<BookingSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
