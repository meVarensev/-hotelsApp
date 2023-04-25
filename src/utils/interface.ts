export interface IFavoriteCity {
    cityName: string,
    rating: number,
    date: string,
    count: number,
    price: number,
    id: number,
}


export interface IGetHotelsParams {
    location: string
    checkInDate: string | Date
    checkOutDate: string | Date
}

<<<<<<< HEAD
export interface IGetHotels {
    hotelName: string,
    stars: string,
    hotelId: string,
    priceFrom: string
=======
export interface LoginFormInputs {
    email: string;
    password: string;
>>>>>>> 77882309357d8344a62dc1e7a6f10fb46194fad5
}
