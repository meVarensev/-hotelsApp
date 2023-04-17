import React from 'react';
import {CustomButton} from "./custom-button";
import {SubmitHandler, useForm} from "react-hook-form";
import {ERROR_MESSAGE} from "../utils/email-regexp";

interface ISearchForm {
    location: string
    date: string
    count: number
}

function SearchForm() {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<ISearchForm>({mode: "onChange"});
    const onSubmit: SubmitHandler<ISearchForm> = (data) => {
        console.log(data, "здесь можно отправить данные на сервер для поиска");
        reset();

        // здесь можно отправить данные на сервер для поиска
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className="min-w-[360px] max-h-[410px]  bg-[#FFFFFF] drop-shadow-xl mb-[24px] p-[32px] rounded-[16px]">
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
                    {...register("date", {
                        required: ERROR_MESSAGE
                    })} type="date"/>

                {errors.date && <p className="error-message">{errors.date.message}</p>}
            </div>

            <div className="mb-[18px]">
                <p className="input-title">Количество дней</p>
                <input
                    className="my-input"
                    {...register("count", {
                        required: ERROR_MESSAGE
                    })} type="number"/>

                {errors.count && <p className="error-message">{errors.count.message}</p>}
            </div>


            <CustomButton props="Найти"/>
        </form>
    );
}

export {SearchForm};
