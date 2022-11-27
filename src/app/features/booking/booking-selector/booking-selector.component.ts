import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingService } from 'src/app/core/booking.service';
import { DynamicHostDirective } from 'src/app/shared/dynamic-host.directive';
import { BoardingDashboardComponent } from '../../boarding/boarding-dashboard/boarding-dashboard.component';

@Component({
  selector: 'app-booking-selector',
  templateUrl: './booking-selector.component.html',
  styleUrls: ['./booking-selector.component.scss']
})
export class BookingSelectorComponent implements OnInit {
  @ViewChild(DynamicHostDirective, {static: true}) dynamicHost!: DynamicHostDirective;

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.bookingService.echo();
    this.loadComponent();
  }

  private loadComponent() {
    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(BoardingDashboardComponent);
  }

}
