import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{
  form!: FormGroup
  selected: string = ''
  roomType: string = ''
  constructor(
    protected serv: HotelService,
    protected http: HttpClient,
    protected route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.createForm()
    this.serv.getRoomTypes()
    this.showAll();
    // this.serv.getHotelId(this.serv.hotelId)
  }
  createForm() {
    this.form = new FormGroup ({
      priceFrom: new FormControl ('0', Validators.required),
      priceTo: new FormControl ('400', Validators.required),
      roomTypeId: new FormControl ('', Validators.required),
      checkIn: new FormControl('', Validators.required), 
      checkOut: new FormControl('', Validators.required), 
      maximumGuests: new FormControl('', Validators.required),
    })
  }
  submitted() {
    if(this.form.invalid) {
      return
    }
    this.serv.notFiltered = true;
    this.http.post<any>('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', this.form.value)
    .subscribe(res => {
      this.serv.rooms = res
    })
    // console.log(this.form.value);
  }
  async filterRooms(id: any) {
    await this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id) {
        this.serv.getRooms();
        console.log("All rooms just before filtering by type: " + this.serv.rooms);
      }
    })
    await new Promise(resolve => setTimeout(resolve, 650)); 
    this.serv.filteredRooms = this.serv.rooms.filter(room => room.roomTypeId === id)
    console.log("Filtered rooms: " + this.serv.filteredRooms);
  }
  showAll() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id) {
        this.serv.getHotelById(+id);
        console.log("Id but retrieved from route params" + id);
        
      }
      else this.serv.getRooms();
    })
    this.serv.notFiltered = true;
  }
}