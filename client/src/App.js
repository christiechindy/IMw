import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PerMovie from "./pages/PerMovie";

function App() {
    return (
        // <div className="App">
        //     <Header/>
        //     <div className="jarak" style={{height: "100px"}}></div>
        //     <Movie/>

        //     <Footer/>
        // </div>
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/permovie" element={<PerMovie/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
