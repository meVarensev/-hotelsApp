
export const searchByLocation = (array: {hotelName: string}[], hotelName: string): {hotelName: string} | undefined => {
    return array.find(obj => obj.hasOwnProperty('hotelName') && obj.hotelName === hotelName);
};




