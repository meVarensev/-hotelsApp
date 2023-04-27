import React, {useEffect, useState} from 'react';
import {useGetFavoriteQuery} from "../../api/fetch-auth";
import {Hotel} from "./hotel";
import {IFavoriteCity} from "../utils/interface";
import CircularProgress from "@mui/material/CircularProgress";
function ContainerFavoriteCities() {
    const {data = [], isLoading} = useGetFavoriteQuery();

    if (isLoading) {
        return  <div className="w-full h-full flex justify-center items-center">
            <CircularProgress/>
        </div>
    }

    return (
        <div className="scrollbar-thin  scrollbar-thumb-[#41522E]  scrollbar-track-[#E7E7E7] overflow-y-scroll h-[350px] pr-[8px]">
            {data.map(({hotelName,stars,priceFrom,date,count,id}:IFavoriteCity) => {
                return <div className="border-b-2" key={id}>
                    <Hotel
                        hotelName={hotelName}
                        stars={stars}
                        date={date}
                        count={count}
                        priceFrom={priceFrom}/>

                </div>
            })}
        </div>
    );
}

export {ContainerFavoriteCities};







