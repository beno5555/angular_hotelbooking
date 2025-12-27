import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HotelService } from '../hotel.service';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BookedRoom } from '../../interfaces/interface';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit{
  form!: FormGroup
  selected: string = ''
  room: any
  // roomToBook: BookedRooms = 
  // n: boolean = true
  // m: boolean = false
  constructor(
    private route: ActivatedRoute,
    protected serv: HotelService,
  ) { }
  ngOnInit(): void {
    this.loadRoom()
    this.createForm()
    
  }
  loadRoom() {
    this.serv.getRooms()
    this.route.params.subscribe((params: any) => {
       this.serv.getRoomById(+params.id).subscribe(res => {
          this.room = res
          if(+this.room.id === 15) this.room.images = this.room.images.slice(5);
          if(+this.room.id === 16) this.room.images.pop(); this.room.images.pop();
          if(+this.room.id === 18) this.room.images.pop();
          if(+this.room.id === 20) this.room.images = [this.room.images[0], this.room.images[2]];
      })
    })
  }
  // show() {
  //   this.n = false
  //   this.m = true
  // }
  // hide() {
  //   this.n = true
  //   this.m = false
  // }

  createForm() {
    this.form = new FormGroup ({
      checkIn: new FormControl('', Validators.required),
      checkOut: new FormControl('', Validators.required),
      costumerName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      costumerPhoneNumber: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    })
  }

  bookLoadedRoom()  {
    if(this.form.invalid) return;
    
    const checkInDate = new Date(this.form.value.checkIn).toISOString();
    const checkOutDate = new Date(this.form.value.checkOut).toISOString();

    const nightsCount = Math.round((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime())) / (1000 * 60 * 60 * 24);
    const totalPrice = nightsCount * this.room.pricePerNight;

    const roomToBook: BookedRoom = {
      id: 0,
      roomID: this.room.id,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      totalPrice: totalPrice,
      isConfirmed: true,
      customerName: this.form.value.costumerName,
      customerId: "string",
      customerPhone: this.form.value.costumerPhoneNumber
    }
    this.serv.bookRoom(roomToBook)
    this.form.reset();

  }

}
