import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircularProgress from "@mui/material/CircularProgress";
import {SearchHotels} from "./search-hotels";
import {ScrollbarImage} from "./scrollbar-image";
import {useAppSelector} from "../hoc/useAppDispatch";
import {format} from "date-fns";

function Content() {
    const {location,checkInDate} = useAppSelector(state => state.location.location)

    return (
        <div className="max-w-[664px] max-h-[902px] bg-[#FFFFFF] drop-shadow-xl p-[32px] rounded-[16px]">
            <div className="flex justify-between mb-[26px]">
                <div className="font-medium text-3xl text-[#424242] gap-3.5 flex items-center ">
                    <span>Отели</span>
                    <ArrowForwardIosIcon className="text-[#A7A7A7]"/>
                    <span>{location}</span>
                </div>
                <span className="font-normal text-[#41522E] text-2xl">{format(new Date(checkInDate), "dd MMMM yyyy")}</span>
            </div>
            <ScrollbarImage/>
            <p className="text-lg font-light text-[#424242] gap-2 flex items-center mb-[13px]">
                <span>Добавлено в Избранное:</span>
                <span className="font-medium">3</span>
                <span>отеля</span>
            </p>
            <SearchHotels/>
        </div>
    );
}

export {Content};
