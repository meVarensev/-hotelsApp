import axios from "axios";
import {IGetHotelsParams} from "./interface";




export const getHotels = ({location, checkInDate, checkOutDate}: IGetHotelsParams) => {
    const URL = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}`
    console.log(URL)
    axios.get(URL)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}
