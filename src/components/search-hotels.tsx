import React from 'react';
import {cities} from "../utils/email-regexp";
import {IFavoriteCity} from "../utils/interface";
import {IconHome} from "./icon-home";
import {City} from "./city";

function SearchHotels() {
    return (
        <div
            className="scrollbar-thin  scrollbar-thumb-[#41522E]  scrollbar-track-[#E7E7E7] overflow-y-scroll h-[529px] w-full pr-[8px]">
            {
                cities.map(({cityName, id, price, rating, date, count}: IFavoriteCity) => {
                    return <div className="flex items-center justify-center  border-b-2  pr-[8px]">
                        <div key={id} className="w-full">
                            <div className="mr-6">
                                <IconHome/>
                            </div>

                            <City
                                cityName={cityName}
                                rating={rating}
                                date={date}
                                count={count}
                                price={price}/>

                        </div>
                    </div>
                })
            }
        </div>
    );
}

export {SearchHotels};
