import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardingService {

  constructor() { }

  echo() {
    console.log('BoardingService');
  }
}
