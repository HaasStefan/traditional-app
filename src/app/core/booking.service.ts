import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  echo() {
    console.log('BookingService');
  }
}
