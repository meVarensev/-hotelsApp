import React from 'react';
import {Header} from "../components/header";
import {MainContainer} from "../components/main-container";


function HomePage() {

    return (
        <div className="bg-[#E5E5E5] w-full h-full  mb-[32px] ">
            <Header/>
            <MainContainer/>
        </div>
    );
}

export {HomePage};
