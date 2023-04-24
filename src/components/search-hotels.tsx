import React, {useEffect, useState} from 'react';
import {cities} from "../utils/email-regexp";
import {IconHome} from "./icon-home";
import {City} from "./city";
import {useGetLocationsQuery} from "../../api/fetch-locations";
import CircularProgress from "@mui/material/CircularProgress";
import {useAppSelector} from "../hoc/useAppDispatch";

function SearchHotels() {
    const [location, setLocation] = useState({})
    const {data, error, isLoading} = useGetLocationsQuery(location)
    const searchLocation = useAppSelector(state => state.location.location)

    useEffect(() => {
        setLocation(searchLocation)
    }, [searchLocation])

    return (
        <div
            className="scrollbar-thin  scrollbar-thumb-[#41522E]  scrollbar-track-[#E7E7E7] overflow-y-scroll h-[529px] w-full pr-[8px]
            flex items-center justify-center  ">

            {isLoading ? <CircularProgress/> : <div className=" w-full ">
                {
                    data.map(({hotelName, stars, hotelId, priceFrom, date, count}) =>
                        <div className=" w-full   border-b-2  pr-[8px]" key={hotelId}>
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="mr-6">
                                    <IconHome/>
                                </div>
                                <City
                                    cityName={hotelName}
                                    rating={stars}
                                    price={priceFrom}
                                    date={"17.04.2023"}
                                    count={3}
                                />
                            </div>
                        </div>)
                }</div>
            }

        </div>
    );
}

export {SearchHotels};
