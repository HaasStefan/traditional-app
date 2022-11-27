import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingSelectorComponent } from './booking-selector/booking-selector.component';
import { RouterModule } from '@angular/router';
import { routes } from './booking.routes';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BookingSelectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingModule { }
