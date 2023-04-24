import {IGetHotelsParams} from "./interface";

export const defaultLocation:IGetHotelsParams = {
    location : "Москва",
    checkInDate : new Date().toISOString().slice(0,10),
    checkOutDate: "1"
}
