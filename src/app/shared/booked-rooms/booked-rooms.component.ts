import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { BookedRoom, Room, BookedRoomToDisplay } from '../../interfaces/interface';
import { HotelsComponent } from '../hotels/hotels.component';

@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.component.html',
  styleUrl: './booked-rooms.component.css'
})
export class BookedRoomsComponent implements OnInit {
  constructor(
    protected hotelServ: HotelService
  ) {}
  
  room: any
  bookedRoomsToDisplay: BookedRoomToDisplay[] = []
  async ngOnInit() {
    await this.hotelServ.getBookedRooms();
    console.log(this.hotelServ.bookedRooms);
    // this.getRoomsData()
    
    // this.getRoomData(this.hotelServ.bookedRooms[0].roomID);
  }
  
  async getRoomsData() {
    this.hotelServ.bookedRooms.forEach(async (bookedRoom) => {
      this.hotelServ.getRoomById(bookedRoom.roomID).subscribe(res => this.room = res);
      await new Promise(resolve => setTimeout(resolve, 200)); 
      this.hotelServ.getHotelById(this.room.hotelId);
      await new Promise(resolve => setTimeout(resolve, 100));
      this.bookedRoomsToDisplay.push({
        hotelImage: this.hotelServ.hotel.featuredImage,
        hotelName: this.hotelServ.hotel.name,
        roomImage: this.room.images[0].source,
        roomName: this.room.name,
        pricePerNight: this.room.pricePerNight,
        customerName: bookedRoom.customerName,
        customerPhoneNumber: bookedRoom.customerPhone,
        checkInDate: new Date(bookedRoom.checkInDate),
        checkOutDate: new Date(bookedRoom.checkOutDate),
        totalPrice: bookedRoom.totalPrice
    })
      console.log(this.room);
    })
    
  }
  
}
