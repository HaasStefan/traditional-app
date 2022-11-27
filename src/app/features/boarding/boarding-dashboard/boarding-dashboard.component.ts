import { Component, OnInit } from '@angular/core';
import { BoardingService } from 'src/app/core/boarding.service';
import { PassengerService } from 'src/app/core/passenger.service';

@Component({
  selector: 'app-boarding-dashboard',
  templateUrl: './boarding-dashboard.component.html',
  styleUrls: ['./boarding-dashboard.component.scss']
})
export class BoardingDashboardComponent implements OnInit {

  constructor(
    private boardingService: BoardingService,
    // DIRTY:
    private passengerService: PassengerService,
  ) { }

  ngOnInit(): void {
    this.boardingService.echo();
    this.passengerService.echo();
  }

}
