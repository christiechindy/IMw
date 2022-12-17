import Movie from "./Movie";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react';

const API_BASE = "http://localhost:3001";

export default function InTheaters(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        GetMovies();

        console.log(movies);
    }, [movies])

    const GetMovies = () => {
        fetch(API_BASE + "/movies/inTheaters")
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.error("Error: ", err));
    }

    return(
        <div className="inTheaters">
            <h2 className="subsesTitle">In theaters</h2>
            <div className="descriptions">
                <p>Are available to watch on Cinema XXI</p>
                <p>See all</p>
            </div>
            <div className="singleRowMovie">
                {movies && movies.map(movie => (
                    <Movie 
                    id={movie._id} 
                    poster={movie.portraitImg} 
                    title={movie.title} 
                    year={movie.year} 
                    rating={movie.rating} 
                    watchlist={movie.watchlist} />                   
                ))}
            </div>
        </div>
        
    );
}