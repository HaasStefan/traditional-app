import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerCardComponent } from './passenger-card/passenger-card.component';
import { RouterModule } from '@angular/router';
import { routes } from './passenger.routes';



@NgModule({
  declarations: [
    PassengerCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PassengerModule { }
