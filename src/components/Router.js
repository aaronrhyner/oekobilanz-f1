import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";


const BrowserRouter = () => {
    return (
        <Router>
            <div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
};

export default BrowserRouter;
