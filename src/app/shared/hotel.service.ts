import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookedRoom, Hotel, RoomType, Room } from '../interfaces/interface';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotels: Hotel[] = []
  rooms: Room[] = []
  bookedRooms: BookedRoom[] = []
  availableRooms: Room[] = []
  room!: Room
  hotel!: Hotel
  roomTypes: RoomType[] = []
  filteredRooms: Room[] = []
  notFiltered = true
  hotelId!: number

  constructor(
    private http: HttpClient
    ) { }
  
  getHotels() {
    this.http.get<Hotel[]>('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
      .subscribe(res => {
        this.hotels = res
        
      })
  }
  getRooms() {
    this.http.get<Room[]>('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
      .subscribe(res => {
        this.rooms = res
        // console.log("logged by getrooms method");
        
      })
  }
  getRoomById(id: number){
    return this.http.get<Room>(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
  }
  getHotelById(id: number) {
    // console.log("Hotel ID: " +id);
    
    this.http.get<Hotel>(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
      .subscribe ({ next: res => {
        this.hotel = res
        this.rooms = this.hotel.rooms
        // console.log("Rooms sorted by hotel: " + this.rooms);
        
        
      }})
  }
  getRoomTypes() {
    this.http.get<RoomType[]>('https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes')
      .subscribe(res => {
        this.roomTypes = res
      })
  }
  async getBookedRooms() {
    await this.http.get<BookedRoom[]>('https://hotelbooking.stepprojects.ge/api/Booking')
      .subscribe(res => {
        this.bookedRooms = res
      })
      await new Promise(resolve => setTimeout(resolve, 500))
  }

  bookRoom(bookingData: BookedRoom) {
    this.http.post('https://hotelbooking.stepprojects.ge/api/Booking', bookingData, {responseType: 'text'})
      .subscribe({
        next: (res: string) => {
          console.log("Booked Successfully", res);
          alert("Booking Successful!");
          
        },      
        error: (err) => {
          console.log("Booking failed", err);
          alert(`Booking Failed! ${err.error}`);
        }
      })
  }
  bookRoomAltered(bookingData: BookedRoom) {
    this.http.post<string>('https://hotelbooking.stepprojects.ge/api/Booking', bookingData, )
      .subscribe({
        next: res => {
          console.log(res);
          alert("Booking Successful");
          
        },      
        error: err => {
          console.log("Booking failed", err);
          alert("Booking Failed. Try Again.");
          
        }
      })
  }
  getAvailableRooms() {
    this.http.get<Room[]>('https://hotelbooking.stepprojects.ge/api/Rooms/GetAvailableRooms')
      .subscribe(res => {
        this.availableRooms = res.splice(0, 6)
      })
  }
}
