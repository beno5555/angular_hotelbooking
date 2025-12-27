import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit{
  constructor(protected hotelServ: HotelService) {}
  ngOnInit(): void {
    this.hotelServ.getHotels()
  }
}
