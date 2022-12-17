import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import Movie from '../components/Movie';

const API_BASE = "http://localhost:3001";

export default function PerGenre() {
    const {genres} = useParams(); //ini namany hrs sm dgn yg di define di App.js, klo tdk, tdk mauki

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        GetMovies();

        console.log(movies);
    }, [movies])

    const GetMovies = () => {
        fetch(API_BASE + "/movies/" + genres)
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.error("Error: ", err));
    }

    return (
        <div className="perCathegory">
            <div className="wrapper">
                <h2 className="subsesTitle">{genres}</h2>
                <div className="moviesContainer">
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
        </div>
    )
}
