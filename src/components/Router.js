import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import Flashcards from "../pages/FlashCards";
import Lueckentext from "../pages/Lueckentext";
import Quellen from '../pages/Quellen';



const MyBrowserRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/flashcards" element={<Flashcards/>}/>
                <Route path="/quiz" element={<Quiz/>}/>
                <Route path="/lueckentext" element={<Lueckentext/>}/>
                <Route path="/quellen" element={<Quellen/>}/>
            </Routes>
        </Router>
    );
};

export default MyBrowserRouter;
