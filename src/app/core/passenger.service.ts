import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor() { }

  echo() {
    console.log('PassengerService');
  }
}
