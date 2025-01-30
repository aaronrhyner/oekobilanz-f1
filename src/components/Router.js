import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Quellen from '../pages/Quellen';
import Logistik from "../pages/Logistik";
import Streckenbetrieb from "../pages/Streckenbetrieb";
import NetZero2030 from "../pages/NetZero2030";


const MyBrowserRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/quellen" element={<Quellen/>}/>
                <Route path="/details/1" element={<Streckenbetrieb/>}/>
                <Route path="/details/2" element={<NetZero2030/>}/>
                <Route path="/details/3" element={<Logistik/>}/>
            </Routes>
        </Router>
    );
};

export default MyBrowserRouter;
