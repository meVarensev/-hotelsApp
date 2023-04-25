import React, {useEffect, useState} from 'react';

import {IconHome} from "./icon-home";
import {City} from "./city";
import {useGetLocationsQuery} from "../../api/fetch-locations";
import CircularProgress from "@mui/material/CircularProgress";
import {useAppSelector} from "../hoc/useAppDispatch";
import {defaultLocation} from "../utils/default-location";
import {IGetHotels} from "../utils/interface";

function SearchHotels() {
    const [location, setLocation] = useState(defaultLocation)
    const {data, error, isLoading} = useGetLocationsQuery(location)
    const searchLocation = useAppSelector(state => state.location.location)

    useEffect(() => {
        setLocation(searchLocation)
    }, [searchLocation])
<<<<<<< HEAD


    if(error) {
        return <p>error...</p>
    }

=======
// TODO: in progress
>>>>>>> 77882309357d8344a62dc1e7a6f10fb46194fad5
    return (
        <div
            className="scrollbar-thin  scrollbar-thumb-[#41522E]  scrollbar-track-[#E7E7E7] overflow-y-scroll h-[529px] w-full pr-[8px]
            flex items-center justify-center  ">
            {isLoading ? <CircularProgress/> : <div className=" w-full h-full">
                {
<<<<<<< HEAD
                    data.map(({hotelName, stars, hotelId, priceFrom}:IGetHotels) =>
=======

                    data.map(({hotelName, stars, hotelId, priceFrom, date, count}) =>
>>>>>>> 77882309357d8344a62dc1e7a6f10fb46194fad5
                        <div className=" w-full   border-b-2  pr-[8px]" key={hotelId}>
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="mr-6">
                                    <IconHome/>
                                </div>
                                <City
                                    hotelName={hotelName}
                                    stars={stars}
                                    priceFrom={priceFrom}
                                    date="17.04.2023"
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
