import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'boarding',
    pathMatch: 'full'
  },
  {
    path: 'boarding',
    loadChildren: async () =>
      (await import('./features/boarding/boarding.module')).BoardingModule,
  },
  {
    path: 'booking',
    loadChildren: async () =>
      (await import('./features/booking/booking.module')).BookingModule,
  },
  {
    path: 'passenger',
    loadChildren: async () =>
      (await import('./features/passenger/passenger.module')).PassengerModule,
  },
];
