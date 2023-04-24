import React from "react";
import {CustomButton} from "./custom-button";
import {SubmitHandler, useForm} from "react-hook-form";
import {ERROR_MESSAGE} from "../utils/email-regexp";
import {IGetHotelsParams} from "../utils/interface";
import {sumDate} from "../utils/sumDate";
import { useGetLocationsQuery } from '../../api/fetch-locations';
import {useAppDispatch} from "../hoc/useAppDispatch";
import {setLocation} from "../store/locations-slice";




function SearchForm() {
    const dispatch = useAppDispatch();

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IGetHotelsParams>({mode: "onChange"});
    const onSubmit: SubmitHandler<IGetHotelsParams> = (data: IGetHotelsParams):void => {
        const newData = sumDate(data)
        dispatch(setLocation(newData))
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className="min-w-[360px] min-h-[410px]  bg-[#FFFFFF] drop-shadow-xl mb-[24px] p-[32px] rounded-[16px]">
            <div className="mb-[18px]">
                <p className="input-title">Локация</p>
                <input
                    className="my-input"
                    {...register("location", {
                        required: ERROR_MESSAGE
                    })} type="text"/>

                {errors.location && <p className="error-message">{errors.location.message}</p>}
            </div>

            <div className="mb-[18px]">
                <p className="input-title">Дата заселения</p>
                <input
                    className="my-input"
                    {...register("checkInDate", {
                        required: ERROR_MESSAGE
                    })} type="date"/>

                {errors.checkInDate && <p className="error-message">{errors.checkInDate.message}</p>}
            </div>

            <div className="mb-[18px]">
                <p className="input-title">Количество дней</p>
                <input
                    className="my-input"
                    {...register("checkOutDate", {
                        required: ERROR_MESSAGE
                    })} type="number" min={0}/>

                {errors.checkOutDate && <p className="error-message">{errors.checkOutDate.message}</p>}
            </div>
            <CustomButton props="Найти"/>
        </form>
    );
}

export {SearchForm};
