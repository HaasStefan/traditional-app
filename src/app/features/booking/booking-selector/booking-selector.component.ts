import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/core/booking.service';

@Component({
  selector: 'app-booking-selector',
  templateUrl: './booking-selector.component.html',
  styleUrls: ['./booking-selector.component.scss']
})
export class BookingSelectorComponent implements OnInit {

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.bookingService.echo();
  }

}
