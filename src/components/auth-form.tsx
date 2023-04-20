import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import {EMAIL_REGEXP, ERROR_MESSAGE, ERROR_MESSAGE_EMAIL} from "../utils/email-regexp";
import { CustomButton } from './custom-button';

interface LoginFormInputs {
    login: string;
    password: string;
}



const AuthForm = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<LoginFormInputs>({mode: "onChange"});
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        console.log(data, "здесь можно отправить данные на сервер для авторизации");
        reset();
        handleClick();
        // здесь можно отправить данные на сервер для авторизации
    };


    const handleClick = () => navigate('/');

    return (
        //
        <form onSubmit={handleSubmit(onSubmit)} className="p-[25px]">
            <div className="mb-[18px]">
                <p className="input-title">Логин</p>
                <input
                    className="my-input"
                    {...register("login", {
                    required: ERROR_MESSAGE,
                    pattern: {
                        value: EMAIL_REGEXP,
                        message: ERROR_MESSAGE_EMAIL
                    }
                })} type="text"/>

                {errors.login && <p className="error-message">{errors.login.message}</p>}
            </div>

            <div className="mb-[18px]">
                <p className="input-title">Пароль</p>
                <input
                    className="my-input"
                    {...register("password", {
                    required: ERROR_MESSAGE ,
                        minLength : {
                            value: 8 ,
                            message: "Минимум 8 символов"
                        }
                })} type="password"/>

                {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>

            <div className="mt-[25px]">
                <CustomButton props={"Войти"}/>
            </div>
        </form>

    );
};

export {AuthForm};
