import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PerMovie from "./pages/PerMovie";
import PerGenre from "./pages/PerGenre";

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
                {/* <Route path="/movie" element={<Home/>} /> */}
                <Route path="/movie/:id" element={<PerMovie/>}/>
                <Route path="/movies/:genres" element={<PerGenre />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
