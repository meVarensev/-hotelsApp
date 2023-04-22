import React from 'react';
import {CustomButton} from "./custom-button";
import {SubmitHandler, useForm} from "react-hook-form";
import {ERROR_MESSAGE} from "../utils/email-regexp";
import {IGetHotelsParams} from "../utils/interface";
import {getHotels} from "../utils/get-hotels";
import {addDays, format} from "date-fns"
import {sumDate} from "../utils/sumDate";


function SearchForm() {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<IGetHotelsParams>({mode: "onChange"});
    const onSubmit: SubmitHandler<IGetHotelsParams> = (data: IGetHotelsParams) => {
        console.log(data, "здесь можно отправить данные на сервер для поиска");
        const newData = sumDate(data)
        getHotels(newData)
        reset();
        // здесь можно отправить данные на сервер для поиска
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
