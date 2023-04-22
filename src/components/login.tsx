import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import {EMAIL_REGEXP, ERROR_MESSAGE, ERROR_MESSAGE_EMAIL} from "../utils/email-regexp";
import {CustomButton} from './custom-button';
import {FormRegister} from "./form-register";


function Login() {
    const navigate = useNavigate();
    const handleClickRegister = () => navigate('/register');

    return (
        //
        <div className="p-[25px]">
            <FormRegister name="Войти"/>

            <div className="mt-[25px]" onClick={handleClickRegister}>
                <CustomButton props="Регистрация"/>
            </div>
        </div>

    );
}

export {Login};
