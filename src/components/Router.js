import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import ModelComponent from "../pages/ModelComponent";


const MyBrowserRouter = () => {
    return (
        <Router>
            <div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Car" element={<ModelComponent />} />
                </Routes>
            </div>
        </Router>
    );
};

export default MyBrowserRouter;
