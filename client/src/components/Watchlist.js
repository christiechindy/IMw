import Movie from "./Movie";
import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:3001";

export default function Watchlist(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        GetMovies();

        console.log(movies);
    }, [movies])

    const GetMovies = () => {
        fetch(API_BASE + "/movies/watchlist")
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.error("Error: ", err));
    }

    return(
        <div className="watchlist">
            <div className="viewed">
                <Link to="/movies/watchlist" style={{textDecoration: "none"}}><h2 className="subsesTitle">Watchlist</h2></Link>
                <Link to="/movies/watchlist" style={{textDecoration: "none"}}><p>See all</p></Link>
            </div>
            <div className="singleRowMovie">
                {movies && movies.map(movie => (
                    <Movie 
                    id={movie._id} 
                    poster={movie.portraitImg} 
                    title={movie.title} 
                    year={movie.year} 
                    rating={movie.rating} 
                    watchlist={movie.watchlist}/>                   
                ))}
            </div>
        </div>
        

    );
}