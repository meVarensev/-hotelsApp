import React from 'react';
import {City} from "./city";
import {cities} from "../utils/email-regexp";
import {IFavoriteCity} from "../utils/interface";



function ContainerFavoriteCities(){
    return (
        <div
            className="scrollbar-thin  scrollbar-thumb-[#41522E]  scrollbar-track-[#E7E7E7] overflow-y-scroll h-[350px] pr-[8px]">
            {/*{cities.map(({cityName, id, rating, price, count, date}: IFavoriteCity) => {*/}
            {/*    return <div className="border-b-2" key={id}>*/}
            {/*        <City*/}
            {/*              cityName={cityName}*/}
            {/*              rating={rating}*/}
            {/*              date={date}*/}
            {/*              count={count}*/}
            {/*              price={price}/>*/}

            {/*    </div>*/}
            {/*})}*/}
        </div>
    );
}

export {ContainerFavoriteCities};
