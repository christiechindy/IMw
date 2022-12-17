import Movie from "./Movie";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:3001";

export default function FanFavorites(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        GetMovies();

        console.log(movies);
    }, [movies])

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
                <Link to="/movies/fanfav" style={{textDecoration: "none"}}><p>See all</p></Link>
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