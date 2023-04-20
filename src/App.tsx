import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login} from "./pages/login";
import {HomePage} from "./pages/home-page";

function App() {

    return (
        <div >

            <Router>
                <Routes>
                    <Route  path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
