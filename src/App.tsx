import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Auth} from "./pages/auth";
import {HomePage} from "./pages/home-page";
import {Register} from "./pages/register";
import {Login} from "./components/login";

function App() {

    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Auth props={<Login/>}/>}/>
                    <Route path="/register" element={<Auth props={<Register/>}/>}/>

                </Routes>
            </Router>
        </div>
    );
}

export default App;
