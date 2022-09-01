import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Charts from "./pages/Charts/index";
import Home from "./pages/Home";
import Records from "./pages/Records";

function Rotas() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/records" element = {<Records/>}/>
                <Route path="/charts" element = {<Charts/>}/>
            </Routes>
        </BrowserRouter>
    )

    
}

export default Rotas;