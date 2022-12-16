import Movie from "./Movie";
import AngleRight from "../icons/AngleRight";
import { useState } from "react";
import { useEffect } from "react";

const API_BASE = "http://localhost:3001";

export default function FanFavorites(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        GetMovies();

        console.log(movies);
    }, [])

    const GetMovies = () => {
        fetch(API_BASE + "/movies/fanFav")
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.error("Error: ", err));
    }

    return(
        <div className="fanFavorites">
            <h2 className="subsesTitle">Fan Favorites</h2>
            <div className="descriptions">
                <p>High rating and trending movies</p>
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