import React, {useState} from 'react';
import Rating from "@mui/material/Rating";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useAddFavoriteLocationMutation, useDeleteProductMutation, useGetFavoriteQuery} from "../../api/fetch-auth";
import {useAppSelector} from "../hoc/useAppDispatch";
import {searchByLocation} from "../utils/search-by-location";

interface IFavoriteHotel {
    hotelName: string
    date: string
    count: number
    priceFrom: number | string
    stars: number | string
    id: number
}

function Hotel({hotelName, count, date, priceFrom, stars, id}: IFavoriteHotel) {
    const [state, setState] = useState({hotelName, stars, priceFrom, date, count, id})
    const [addFavoriteLocation] = useAddFavoriteLocationMutation()
    const [deleteFavoriteLocation] = useDeleteProductMutation()
    const {data = []} = useGetFavoriteQuery()
    const handleClickFavoriteIcon = async () => {
        // searchByLocation(data, hotelName) ?  await deleteFavoriteLocation(id) :  await addFavoriteLocation(state)
        console.log( searchByLocation(data, hotelName))
    }

    const clickLog = () => {
      console.log(id , hotelName, "dsad")
    }

    return (
        <div className="w-full" onClick={clickLog}>
            <div className="flex justify-between mb-[13px] mt-[3px]">
                <p>{hotelName}</p>
                <FavoriteIcon className="text-[#E55858] cursor-pointer hover:text-[#b91c1c]"
                              onClick={handleClickFavoriteIcon}/>
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

export {Hotel};
