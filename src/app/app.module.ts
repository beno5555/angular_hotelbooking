import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotelsComponent } from './shared/hotels/hotels.component';
import { RoomsComponent } from './shared/rooms/rooms.component';
import { ReservationComponent } from './shared/reservation/reservation.component';
import { BookedRoomsComponent } from './shared/booked-rooms/booked-rooms.component';
import { HomeComponent } from './shared/home/home.component';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { NgbCarouselModule, NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    RoomsComponent,
    ReservationComponent,
    HomeComponent,
    BookedRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // RouterLink,
    // RouterLinkActive,
    RouterModule,
    // RouterOutlet,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    NgbCarouselModule,
    NgbAlert
  ],
  providers: [

    provideAnimationsAsync(),
    provideNativeDateAdapter(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Could not integrate NgbCarousel in booked-rooms.component.html. I imported Ngbmodule, NgbSlide and NgbCarousel in app.module.ts but still could not make it work.
// Tried to import NgbCarouselModule from '@ng-bootstrap/ng-bootstrap' but it gave an error.
// Also tried to follow the official documentation from https://ng-bootstrap.github.io/#/components/carousel/examples but it did not help.
// Need to revisit this later.
// For now, I commented out the NgbCarousel code in booked-rooms.component.html to avoid errors.
// Also, I removed bootstrap.bundle.min.js from angular.json and added bootstrap.min.js instead.
// May be the bundle version was causing some conflicts with NgbCarousel.
// Need to investigate this further.
// If you have any suggestions or solutions, please let me know.
// Thank you!
// End of file: src/app/app.module.ts



// Implemented a form trigger node from n8n. it is activated when clicking 'fill in form' button. It works, but design does not sit well. I got the idea to make it a circle just like the chat button and insert some kind of form icon. I will do it tomorrow though. 
// Did it!