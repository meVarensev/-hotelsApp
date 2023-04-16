import React from 'react';
import {useForm} from "react-hook-form";

export interface ICustomInput {
    name: string;
    type: string;

}
function CustomInput({name , type }:ICustomInput) {
    const {register,  formState: {errors} } = useForm<ICustomInput>({mode: "onChange"});


    return (
        <div className="mb-[18px]">
            <p className="text-[16px] font-light leading-[19px] text-[#424242] not-italic mb-[7px]">{name}</p>
            <input
                className="rounded-[4px] border-2 border-solid  border-gray-300 w-full  h-[50px] text-[16px] p-[8px]"
                {...register("name", {
                    required: "Это поле обязательно"
                })} type={type} />

            {errors.name && <p style={{color: "red", fontSize: "12px"}}>{errors.name.message}</p>}
        </div>
    );
}

export {CustomInput};
