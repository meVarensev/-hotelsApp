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

export interface LoginFormInputs {
    email: string;
    password: string;
}
