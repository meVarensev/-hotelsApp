import React from 'react';
import Rating from "@mui/material/Rating";
import FavoriteIcon from '@mui/icons-material/Favorite';

interface IFavoriteCity {
    cityName: string
    date: string
    count: number
    price: number
    rating: number
}

function FavoriteCity({cityName, rating, price, date, count}: IFavoriteCity) {
    return (
        <div className="border-b-2">
            <div className="flex justify-between mb-[13px] mt-[3px]">
                <p>{cityName}</p>
                <FavoriteIcon className="text-[#E55858] cursor-pointer hover:text-[#b91c1c]"/>
            </div>
            <p className="mb-[13px] text-[#878787]">
                <span>{date}</span> <span className="text-[#C4C4C4]">-</span> <span>{count} день</span>
            </p>
            <div className="flex justify-between  mb-[13px]">
                <Rating name="read-only" value={rating} readOnly/>
                <p><span className="text-[#878787] font-light text-xs">Price:</span> <span>  {price}₽</span></p>
            </div>
        </div>
    );
}

export {FavoriteCity};
