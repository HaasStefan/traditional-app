import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingDashboardComponent } from './boarding-dashboard.component';

describe('BoardingDashboardComponent', () => {
  let component: BoardingDashboardComponent;
  let fixture: ComponentFixture<BoardingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardingDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
