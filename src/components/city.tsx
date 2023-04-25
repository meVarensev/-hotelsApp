import React from 'react';
import Rating from "@mui/material/Rating";
import FavoriteIcon from '@mui/icons-material/Favorite';

interface IFavoriteCity {
    hotelName: string
    date: string
    count: number
    priceFrom: number | string
    stars: number | string

}


function City({hotelName, stars, priceFrom, date, count}: IFavoriteCity) {
    return (
        <div className="w-full">
            <div className="flex justify-between mb-[13px] mt-[3px]">
                <p>{hotelName}</p>
                <FavoriteIcon className="text-[#E55858] cursor-pointer hover:text-[#b91c1c]"/>
            </div>
            <p className="mb-[13px] text-[#878787]">
                <span>{date}</span> <span className="text-[#C4C4C4]">-</span> <span>{count} день</span>
            </p>
            <div className="flex justify-between  mb-[13px]">
                <Rating name="read-only" value={Number(stars)} readOnly/>
                <p>
                    <span className="text-[#878787] font-light text-xs mr-3">Price:</span>
                    <span>{Number(priceFrom).toFixed()} ₽</span>
                </p>
            </div>
        </div>
    );
}

export {City};
