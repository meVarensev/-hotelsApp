import React, {HTMLProps} from 'react';

interface IAuthProps {
    // TODO: in progress
    props: any
}

function Auth({props}:IAuthProps) {

    return (
        <div className="relative ">
            <div className="blur-sm ">
                <img src="/img/background.png" className="absolute  w-screen h-screen  bg-no-repeat  opacity-40 "
                     alt=""/>
            </div>

            <div className="flex justify-center items-center w-screen h-screen">
                <div className="relative  bg-[#FFFFFF] w-[25.7rem] min-h-[23.9rem]
                rounded-[16px] shadow-[0_4px_34px_rgba(0,0,0,0.04)]  ">
                    <p className="text-[24px] flex justify-center  font-medium leading-[28px] pt-[32px]">
                        Simple Hotel Check</p>
                    {props}
                </div>
            </div>
        </div>
    );
}

export {Auth};


