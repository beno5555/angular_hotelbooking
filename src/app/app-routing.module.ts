import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { RoomsComponent } from './shared/rooms/rooms.component';
import { HotelsComponent } from './shared/hotels/hotels.component';
import { ReservationComponent } from './shared/reservation/reservation.component';
import { BookedRoomsComponent } from './shared/booked-rooms/booked-rooms.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'hotels/:id/rooms', component: RoomsComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'reservation/:id', component: ReservationComponent},
  
  // Old Paths: 
  
  // {path: 'hotels/:id/rooms', component: RoomsComponent},
  // {path: 'hotels/:id/rooms/booked/:id', component: BookedRoomsComponent},
  // {path: 'rooms/:id/reservation/:id', component: ReservationComponent},
  // {path: 'rooms/reservation/:id', component: ReservationComponent},
  // {path: 'booked', component: BookedRoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
