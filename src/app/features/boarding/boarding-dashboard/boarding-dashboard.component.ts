import { Component, OnInit } from '@angular/core';
import { BoardingService } from 'src/app/core/boarding.service';

@Component({
  selector: 'app-boarding-dashboard',
  templateUrl: './boarding-dashboard.component.html',
  styleUrls: ['./boarding-dashboard.component.scss']
})
export class BoardingDashboardComponent implements OnInit {

  constructor(
    private boardingService: BoardingService
  ) { }

  ngOnInit(): void {
    this.boardingService.echo();
  }

}
