export interface Image {
    id: number
    source: string
    roomId: number
}

export interface BookedDates {
    id: number
    date: string
    roomId: number
}

export interface Room {
    id: number
    name: string
    hotelId: number
    pricePerNight: number
    available: boolean
    maximumGuests: number
    roomTypeId: number
    bookedDates: BookedDates[]
    images: Image[]
}

export interface Hotel {
    id: number
    name: string
    address: string
    city: string
    featuredImage: string
    rooms: Room[]
}


export interface BookedRoom {
    id: number
    roomID: number
    checkInDate: string
    checkOutDate: string
    totalPrice: number
    isConfirmed: boolean
    customerName: string
    customerId: string
    customerPhone: string
}

export interface BookedRoomToDisplay {
    hotelImage: string
    hotelName: string
    roomImage: string
    roomName: string
    pricePerNight: number
    customerName: string
    customerPhoneNumber: string
    checkInDate: Date
    checkOutDate: Date
    totalPrice: number
}

export interface RoomType {
    id: number
    name: string
}