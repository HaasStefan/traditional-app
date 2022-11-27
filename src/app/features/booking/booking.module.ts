import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingSelectorComponent } from './booking-selector/booking-selector.component';
import { RouterModule } from '@angular/router';
import { routes } from './booking.routes';



@NgModule({
  declarations: [
    BookingSelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingModule { }
