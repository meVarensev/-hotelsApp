import {addDays, format} from "date-fns";
import {IGetHotelsParams} from "./interface";

export const formatDate = ({location, checkInDate, checkOutDate}: IGetHotelsParams) => {
    const convertCheckInDate = new Date(checkInDate);
    const sum = addDays(convertCheckInDate, Number(checkOutDate));
     const data = {
        location,
        checkInDate,
        checkOutDate:  format(sum, 'yyyy-MM-dd')
    }
    return data
}
