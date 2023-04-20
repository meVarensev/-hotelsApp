import React, {useState} from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";

function Header() {
    const [isLogin, setIsLogin ] = useState(true)
    const navigate = useNavigate();


    const handleClick = () => navigate('/login');

    return (
        <div className="flex">
            <div className="m-[32px] flex justify-between  items-center w-full">
                <p className="text-[24px] font-medium leading-[28px] text-[#41522E] cursor-pointer">Simple Hotel Check</p>
                <Button style={{color: "#41522E"}} variant="text" endIcon={<LogoutIcon/>} onClick={handleClick}>

                    {isLogin === true ? "Выйти" : "Войти"}
                </Button>
            </div>

        </div>
    );
}

export {Header};
