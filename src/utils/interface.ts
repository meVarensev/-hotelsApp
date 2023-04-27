export interface IFavoriteCity {
    hotelName: string,
    stars: number,
    date: string,
    count: number,
    priceFrom: number,
    id: number,
}



export interface IGetHotelsParams {
    location: string
    checkInDate: string | Date
    checkOutDate: string | Date
}


export interface IGetHotels {
    hotelName: string,
    stars: string,
    hotelId: string,
    priceFrom: string
}

export interface LoginFormInputs {
    email: string,
    password: string,
}
