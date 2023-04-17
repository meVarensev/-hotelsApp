import React from 'react';
import {FavoriteCity} from "./favorite-city";

const cities = [
    {
        cityName: "Moscow Marriott Grand Hotel",
        rating: 3,
        date: "17.04.2023",
        count: 3,
        price: 1600,
        id: 1,
    },
    {
        cityName: "Moscow Marriott Grand Hotel",
        rating: 3,
        date: "17.04.2023",
        count: 3,
        price: 1600,
        id: 2,
    },
    {
        cityName: "Moscow Marriott Grand Hotel",
        rating: 3,
        date: "17.04.2023",
        count: 3,
        price: 1600,
        id: 3,
    }
    ,
    {
        cityName: "Moscow Marriott Grand Hotel",
        rating: 3,
        date: "17.04.2023",
        count: 3,
        price: 1600,
        id: 4,
    }

]

interface IFavoriteCity {
    cityName: string,
    rating: number,
    date: string,
    count: number,
    price: number,
    id: number,
}

function ContainerFavoriteCities() {
    return (
        <div
            className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 overflow-y-scroll h-[350px] pr-[8px]">
            {cities.map(({cityName, id, rating, price, count, date}: IFavoriteCity) => <FavoriteCity key={id}
                                                                                                     cityName={cityName}
                                                                                                     rating={rating}
                                                                                                     date={date}
                                                                                                     count={count}
                                                                                                     price={price}/>)}
        </div>
    );
}

export {ContainerFavoriteCities};
