import Movie from "./Movie";
import AngleRight from "../icons/AngleRight";
import React from 'react';
import { useState } from "react";
import { useEffect } from "react";

const API_BASE = "http://localhost:3001";

export default function TopPicks() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        GetMovies();

        console.log(movies);
    }, [])

    const GetMovies = () => {
        fetch(API_BASE + "/movies/topPicks")
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.error("Error: ", err));
    }

    // const Datatests = [
    //     {
    //         title: "Harry Potter and the Cursed Child",
    //         year: 2016,
    //         rating: 8.5,
    //         portraitImg: "https://images.ctfassets.net/usf1vwtuqyxm/3y9dEN52J2hWkpJLOxQv1W/1c42454b136ad6757b2f2ae4d3de96e5/TT_2021_OnSaleAssets_750x1050-1-.png?w=914&q=70&fm=jpg"
    //     },
    //     {
    //         title: "Harry Potter",
    //         year: 2016,
    //         rating: 8.5,
    //         portraitImg: "https://images.ctfassets.net/usf1vwtuqyxm/3y9dEN52J2hWkpJLOxQv1W/1c42454b136ad6757b2f2ae4d3de96e5/TT_2021_OnSaleAssets_750x1050-1-.png?w=914&q=70&fm=jpg"
    //     }
    // ]

    // GetMovies()

    return(
        <div className="topPicks">
            <h2 className="subsesTitle">Top Picks</h2>
            <div className="descriptions">
                <p>Specially chosen by Top Editors</p>
                <p>See all</p>
            </div>
            <div className="nextShadow"></div>
            <div className="nextArrow"><AngleRight/></div>
            <div className="singleRowMovie">
                {movies.map(movie => (
                    <Movie poster={movie.portraitImg} title={movie.title} year={movie.year} rating={movie.rating} /> 
                ))}
            </div>
        </div>
    );
}