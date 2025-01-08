import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import ModelComponent from "./ModelComponent";
import Flashcards from "../pages/FlashCards";


const MyBrowserRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/flashcards" element={<Flashcards/>}/>
                <Route path="/car" element={<ModelComponent/>}/>
                <Route path="/quiz" element={<Quiz/>}/>
            </Routes>
        </Router>
    );
};

export default MyBrowserRouter;
