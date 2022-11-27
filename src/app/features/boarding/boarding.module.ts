import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardingDashboardComponent } from './boarding-dashboard/boarding-dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './boarding.routes';



@NgModule({
  declarations: [
    BoardingDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BoardingModule { }
