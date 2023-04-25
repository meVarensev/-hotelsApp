import React from 'react';
import {EMAIL_REGEXP, ERROR_MESSAGE, ERROR_MESSAGE_EMAIL} from "../utils/email-regexp";
import {CustomButton} from "./custom-button";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {postAuthUser} from "../utils/post-auth-user";
import {useAppDispatch} from "../hoc/useAppDispatch";
import {authUser} from "../store/auth-slice";
import {useAddAuthUserMutation} from "../../api/fetch-auth";

interface LoginFormInputs {
    email: string;
    password: string;
}

interface IProps {
    name: string
}

function FormRegister({name}: IProps) {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<LoginFormInputs>({mode: "onChange"});
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [addAuthUser] = useAddAuthUserMutation()

    const onSubmit: SubmitHandler<LoginFormInputs> =  (data) => {
        console.log(data, "здесь можно отправить данные на сервер для регистраци");
        postAuthUser(data)
        dispatch( authUser(data))

        handleClickLogin();
        // addAuthUser(data)
        reset();
    };


    const handleClickLogin = () => navigate('/');
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-[18px]">
                    <p className="input-title">Логин</p>
                    <input
                        className="my-input"
                        {...register("email", {
                            required: ERROR_MESSAGE,
                            pattern: {
                                value: EMAIL_REGEXP,
                                message: ERROR_MESSAGE_EMAIL
                            }
                        })} type="text"/>

                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>

                <div className="mb-[18px]">
                    <p className="input-title">Пароль</p>
                    <input
                        className="my-input"
                        {...register("password", {
                            required: ERROR_MESSAGE,
                            minLength: {
                                value: 8,
                                message: "Минимум 8 символов"
                            }
                        })} type="password"/>

                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                </div>

                <div className="mt-[25px]">
                    <CustomButton props={name}/>
                </div>
            </form>
        </div>
    );
}

export {FormRegister};
