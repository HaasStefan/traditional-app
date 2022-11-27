import { Component, OnInit } from '@angular/core';
import { PassengerService } from 'src/app/core/passenger.service';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {

  constructor(
    private passengerService: PassengerService
  ) { }

  ngOnInit(): void {
    this.passengerService.echo();
  }

}
