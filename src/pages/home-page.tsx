import React from 'react';
import {useNavigate} from "react-router-dom";
import {Header} from "../components/header";
import {MainContainer} from "../components/main-container";


function HomePage() {


    return (
        <div className="bg-[#E5E5E5] w-full h-full  ">
            <Header/>
            <MainContainer/>
        </div>
    );
}

export {HomePage};
